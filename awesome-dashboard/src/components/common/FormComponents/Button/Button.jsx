import React from "react";
const Button = props => {
  const { text, onButtonClicked, disabled } = props;

  return (
    <button
      className={`btn m-1 ${props.className}`}
      onClick={onButtonClicked}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
