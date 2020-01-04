import React from "react";
const Button = ({ text, btnType }) => {
  return <button className={`btn m-1 ${btnType}`}>{text}</button>;
};

export default Button;
