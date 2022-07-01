import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        variant="contained"
        className="loginbuttons"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
}
