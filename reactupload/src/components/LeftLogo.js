import React from "react";
import left_logo from "../assets/logo_left.png";
import { useNavigate } from "react-router-dom";

export default function LeftLogo() {
  const navigate = useNavigate();
  const handleScrollToTop = (event) => {
    event.preventDefault();
    navigate("/");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {" "}
      <div to="/" onClick={handleScrollToTop}>
        <img src={left_logo} alt="logo" className="homelogo"></img>
      </div>
    </div>
  );
}
