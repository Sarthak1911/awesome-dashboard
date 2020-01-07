import React from "react";
const Dropdown = ({ dropdownTarget, dropdownItems, onDropdownSelect }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
      >
        {dropdownTarget}
      </button>
      {
        <div className="dropdown-menu scrollable-menu">
          {dropdownItems.map(item => {
            return (
              <a
                className="dropdown-item"
                href="#"
                key={item}
                onClick={onDropdownSelect}
              >
                {item}
              </a>
            );
          })}
          <a
            className="dropdown-item"
            href="#"
            key="All"
            onClick={onDropdownSelect}
          >
            All
          </a>
        </div>
      }
    </div>
  );
};

export default Dropdown;
