import React from "react";
import "./Input.scss";
const Input = ({ placeholder }) => {
  return (
    <div className="form-group">
      <input type="text" className="col" placeholder={placeholder} />
    </div>
  );
};

export default Input;
