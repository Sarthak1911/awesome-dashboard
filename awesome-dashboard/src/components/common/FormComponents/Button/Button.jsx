import React from "react";
const Button = ({ text, btnType, onButtonClicked }) => {
  return (
    <button className={`btn m-1 ${btnType}`} onClick={onButtonClicked}>
      {text}
    </button>
  );
};

export default Button;
