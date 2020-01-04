import React from "react";
import { Link } from "react-router-dom";
const NavLink = ({ active, text, icon, ...rest }) => {
  return (
    <Link {...rest} className={"navlink " + (active ? "active" : "")}>
      <div className="d-flex flex-row align-items-center">
        <i className={"fa  mr-2 " + icon}></i>
        <span className="text-capitalize">{text}</span>
      </div>
    </Link>
  );
};

export default NavLink;
