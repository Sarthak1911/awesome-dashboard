import React from "react";
const Button = ({ text, style }) => {
  return <button className={`btn col m-1 ${style}`}>{text}</button>;
};

export default Button;
