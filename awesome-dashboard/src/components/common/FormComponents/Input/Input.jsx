import React from "react";
import "./Input.scss";
const Input = ({ label, name, error, ...rest }) => {
  return (
    <div className="form-group">
      <input
        name={name}
        {...rest}
        className="col"
        id={name}
        placeholder={label}
      ></input>

      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default Input;
