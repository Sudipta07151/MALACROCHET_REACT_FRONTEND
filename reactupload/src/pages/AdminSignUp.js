import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import "./adminsignup.css";
import { connect } from "react-redux";
import { signupAdmin } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
      alignItems: "center",
      justifyConetent: "center",
      color: "green",
    },
  },
}));

function AdminSignUp({ signupAdmin }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminKey, setadminKey] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email, password, adminKey };
    console.log("data: ", data);
    signupAdmin(data);
    setEmail("");
    setPassword("");
    setadminKey("");
  };
  return (
    <div className="admin_form_wrapper" onSubmit={handleSubmit}>
      <h3>ADMIN SIGNUP</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="filled-basic"
          label="password"
          variant="standard"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="admin key"
          variant="standard"
          value={adminKey}
          onChange={(event) => setadminKey(event.target.value)}
        />
        <button
          variant="contained"
          className={classes.button}
          type="submit"
          className="loginbuttons"
          style={{ color: "white", backgroundColor: "orange" }}
        >
          Signup Admin
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    signUpData: state.getAuthenticationReducers,
  };
};

export default connect(mapStateToProps, { signupAdmin })(AdminSignUp);
