import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import "./adminsignup.css";
import { signup, databaseUploadStatus } from "../actions";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import ErrorMessage from "../components/message/ErrorMessage";
import validator from "validator";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

function LoginPage({ signUpData, databaseUploadStatus, signup }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [name, setName] = useState("");
  const [cnfpassword, setcnfPassword] = useState("");
  const [showPassordMismatch, setShowPassordMismatch] = useState(false);
  const [showEmailMismatch, setShowEmailMismatch] = useState(false);
  const [showSmallPassword, setShowSmallPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== cnfpassword) {
      setShowPassordMismatch(true);
      return;
    }
    if (validator.isEmail(email) === false) {
      setShowEmailMismatch(true);
      return;
    }
    if (password.length <= 6) {
      setShowSmallPassword(true);
      return;
    }
    const data = { email, password, name, isAdmin };
    console.log("data: ", data);
    signup(data);
    setEmail("");
    setPassword("");
    setName("");
    setcnfPassword("");
  };
  const handleClose = () => {
    setTimeout(() => {
      databaseUploadStatus(null);
    }, 1000);
  };
  useEffect(() => {
    setTimeout(() => {
      setShowPassordMismatch(false);
      setShowEmailMismatch(false);
      setShowSmallPassword(false);
    }, 2000);
  }, [showPassordMismatch, showEmailMismatch, showSmallPassword]);

  return (
    <div className="admin_form_wrapper" onSubmit={handleSubmit}>
      <h3>SIGNUP</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="filled-basic"
          label="name"
          variant="standard"
          value={name}
          required
          onChange={(event) => setName(event.target.value)}
        />

        <TextField
          type="email"
          id="standard-basic"
          label="email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          type="password"
          id="filled-basic"
          label="pasword"
          variant="standard"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <TextField
          type="password"
          id="filled-basic"
          label="confirm password"
          variant="standard"
          value={cnfpassword}
          required
          onChange={(event) => setcnfPassword(event.target.value)}
        />
        <button
          variant="contained"
          className="loginbuttons"
          style={{ color: "white" }}
          type="submit"
        >
          SUBMIT
        </button>
      </form>
      {signUpData && signUpData.upload === false && (
        <Snackbar open={true} onClose={handleClose} autoHideDuration={2000}>
          <Alert onClose={handleClose} severity="error">
            {signUpData.message_data}
          </Alert>
        </Snackbar>
      )}
      {signUpData && signUpData.upload === true && (
        <Snackbar
          message={signUpData.message_data}
          open={true}
          onClose={handleClose}
          autoHideDuration={2000}
        >
          <Alert onClose={handleClose} severity="success">
            {signUpData.message_data}
          </Alert>
        </Snackbar>
      )}
      {showPassordMismatch && (
        <ErrorMessage message="password and confirm password didnt match" />
      )}
      {showEmailMismatch && <ErrorMessage message="enter a valid email" />}
      {showSmallPassword && <ErrorMessage message="enter password of six digits or more" />}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    signUpData: state.getAuthenticationReducers,
  };
};

export default connect(mapStateToProps, { signup, databaseUploadStatus })(
  LoginPage
);
