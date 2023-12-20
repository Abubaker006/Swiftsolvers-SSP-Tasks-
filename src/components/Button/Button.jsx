import React from "react";
import "./button.css";
const Button = ({ btnName }) => {
  return (
    <div className="btnBox">
      <button className="btn">{btnName}</button>
    </div>
  );
};

export default Button;
