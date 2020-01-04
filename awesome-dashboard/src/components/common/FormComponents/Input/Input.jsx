import React from "react";
import "./Input.scss";
const Input = ({ placeholder, type }) => {
  return (
    <div className="form-group">
      <input type={type} className="col" placeholder={placeholder} />
    </div>
  );
};

export default Input;
