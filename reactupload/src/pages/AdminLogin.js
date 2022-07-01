import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./adminsignup.css";
import { loginAdmin, databaseUploadStatus } from "../actions";
import { connect } from "react-redux";
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

function AdminLogin({ adminloginData, loginAdmin, loginData, startLoader }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminKey, setAdminKey] = useState("");

  const [show, setShow] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email, password, adminKey };
    console.log("data: ", data);
    setShow(true);
    startLoader();
    loginAdmin(data);
    setAdminKey("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, [adminloginData.loader]);
  // useEffect(() => {
  //   const email = localStorage.getItem("email");
  //   const password = localStorage.getItem("password");
  //   if (email === null && password === null){
  //     return;
  //   }else{
  //     login({ email, password });
  //   }
  // }, [login]);

  return (
    <div className="admin_form_wrapper" onSubmit={handleSubmit}>
      <h3>ADMIN LOGIN</h3>
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
        <TextField
          type="password"
          id="filled-basic"
          label="admin-key"
          variant="standard"
          value={adminKey}
          required
          onChange={(event) => setAdminKey(event.target.value)}
        />
        <button
          variant="contained"
          className="loginbuttons"
          type="submit"
          style={{ color: "white" }}
        >
          LOGIN
        </button>
      </form>

      {adminloginData.loader === true && <BackDrop />}
      {adminloginData.login === false && show && (
        <ErrorMessage message={adminloginData.message_data} />
      )}
      {adminloginData.login === true && show && (
        <SuccessMessage message={adminloginData.message_data} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    signUpData: state.getAuthenticationReducers,
    adminloginData: state.getLoginAdminReducers,
  };
};

export default connect(mapStateToProps, {
  loginAdmin,
  databaseUploadStatus,
  startLoader,
})(AdminLogin);
