import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Comment from "./Comment";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "80%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function CommentsList({ comments }) {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {comments.map((comment,index) => {
        return <Comment key={index} comment={JSON.parse(comment)[0]} />;
      })}
    </List>
  );
}
