import React from "react";
import { logoutAdminUser } from "../actions";
import { connect } from "react-redux";

function AdminLogoutComponent({ logoutAdminUser }) {
  return (
    <div>
      <button
        variant="contained"
        className="loginbuttons"
        style={{ backgroundColor: "orange" }}
        onClick={() => logoutAdminUser()}
      >
        Logout
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    signUpData: state.getAuthenticationReducers,
  };
};

export default connect(mapStateToProps, { logoutAdminUser })(
  AdminLogoutComponent
);
