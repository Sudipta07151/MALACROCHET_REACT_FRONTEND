import React from "react";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import { connect } from "react-redux";

function LogininLogoutWrapper({ loginData }) {
  return (
    <div>
      {!loginData.user && (loginData.login === false || !loginData.login) && (
        <LoginComponent />
      )}
      {loginData.user !== null && loginData.login === true && (
        <LogoutComponent />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loginData: state.getLoginReducers,
  };
};

export default connect(mapStateToProps, {})(LogininLogoutWrapper);
