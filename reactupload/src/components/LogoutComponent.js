import React from "react";
import { logout } from "../actions";
import { connect } from "react-redux";


function LogoutComponent({logout}) {
  return (
    <div>
      <button
        variant="contained"
        className="loginbuttons"
        style={{backgroundColor:'orange'}}
        onClick={()=>logout()}
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

export default connect(mapStateToProps, { logout })(
  LogoutComponent
);



