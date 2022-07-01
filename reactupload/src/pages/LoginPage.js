import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./adminsignup.css";
import { login, databaseUploadStatus } from "../actions";
import { connect } from "react-redux";
import SignUpComponent from "../components/SignUpComponent";
import ErrorMessage from "../components/message/ErrorMessage";
import SuccessMessage from "../components/message/SuccessMessage";
import { startLoader } from "../actions";
import BackDrop from "../components/BackDrop";

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

function LoginPage({ login, loginData, startLoader }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setcnfPassword] = useState("");
  const [show, setShow] = useState(false);
  const [showPassordMismatch, setShowPassordMismatch] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // if (password !== cnfpassword) {
    //   setShowPassordMismatch(true);
    // }
    const data = { email, password };
    console.log("data: ", data);
    setShow(true);
    startLoader();
    login(data);
    setEmail("");
    setPassword("");
    setcnfPassword("");
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
      // setShowPassordMismatch(false);
    }, 2000);
  }, [show]);

  return (
    <div className="admin_form_wrapper" onSubmit={handleSubmit}>
      <h3>LOGIN</h3>
      <form className={classes.root} noValidate autoComplete="off">
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
          label="password"
          variant="standard"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        {/* <TextField
          type="password"
          id="filled-basic"
          label="confirm password"
          variant="standard"
          value={cnfpassword}
          required
          onChange={(event) => setcnfPassword(event.target.value)}
        /> */}
        <button
          variant="contained"
          className="loginbuttons"
          type="submit"
          style={{ color: "white" }}
        >
          LOGIN
        </button>
      </form>

      {loginData.loader === true && <BackDrop />}
      {loginData.login === false && show && (
        <ErrorMessage message={loginData.message_data} />
      )}
      {loginData.login === true && show && (
        <SuccessMessage message={loginData.message_data} />
      )}

      {/* {showPassordMismatch && (
        <ErrorMessage message="password and confirm password didnt match" />
      )} */}

      <SignUpComponent />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    signUpData: state.getAuthenticationReducers,
    loginData: state.getLoginReducers,
  };
};

export default connect(mapStateToProps, {
  login,
  databaseUploadStatus,
  startLoader,
})(LoginPage);
