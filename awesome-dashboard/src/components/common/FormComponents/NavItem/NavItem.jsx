import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.scss";
const NavItem = props => {
  const { text, icon, ...rest } = props;
  return (
    <Link {...rest} className="navitem text-light">
      <div>
        <i className={`fa ${icon}`} aria-hidden="true"></i>
        <span className="nav-text">{text}</span>
      </div>
    </Link>
  );
};

export default NavItem;
