import React from "react";
const CheckBoxInput = ({ name, value, label, ...rest }) => {
  return (
    <div className="form-check">
      <input
        name={name}
        {...rest}
        className="form-check-input"
        id={name}
        checked={value}
        type="checkbox"
      ></input>
      <label htmlFor={name} className="form-check-label text-capitalize">
        {label || name}
      </label>
    </div>
  );
};

export default CheckBoxInput;
