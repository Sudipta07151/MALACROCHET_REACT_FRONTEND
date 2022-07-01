import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80vw",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid black",
    marginTop: "40px",
    marginBottom: "20px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
}));

export default function CommentInput({ handleSend }) {
  const classes = useStyles();
  const [data, setData] = useState("");
  const handleSendChild = () => {
    handleSend(data);
  };
  return (
    <div className={classes.root}>
      <ListItem
        alignItems="flex-start"
        style={{ display: "flex", alignItems: "center" }}
      >
        <TextField
          id="standard-full-width"
          label="Your Review"
          placeholder="Love this product :)"
          fullWidth
          value={data}
          margin="normal"
          onChange={(event) => setData(event.target.value)}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className="loginbuttons"
          style={{ backgroundColor: "blue", height: "20px", cursor: "pointer" }}
          onClick={handleSendChild}
        >
          Review
        </button>
      </ListItem>
    </div>
  );
}
