import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        variant="contained"
        className="loginbuttons"
        style={{
          backgroundColor: "blue",
          color: "white",
          fontWeight: "900",
        }}
        onClick={() => navigate("/signup")}
      >
        SIGNUP
      </button>
    </div>
  );
}
