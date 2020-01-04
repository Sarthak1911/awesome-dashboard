import React from "react";
const Checkbox = ({ label }) => {
  return (
    <div className="form-check mt-4">
      <input type="checkbox" className="form-check-input" />
      <label htmlFor="" className="form-check-label">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
