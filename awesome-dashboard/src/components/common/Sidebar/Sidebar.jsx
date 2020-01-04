import React from "react";
import "./Sidebar.scss";
const Sidebar = props => {
  const togglerRef = React.createRef();

  const { brandName, onToggleSidebar } = props;

  return (
    <nav
      ref={togglerRef}
      className="col-lg-2 col-md-3 col-sm-12 text-white bg-primary sidebar p-0"
    >
      <div className="sidebar-sticky p-0">
        <a href="#" className="navlink brand-btn">
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-uppercase">{brandName}</span>
            <i
              className="fa fa-bars fa-lg"
              onClick={() => onToggleSidebar(togglerRef)}
            ></i>
          </div>
        </a>

        {props.children}
      </div>
    </nav>
  );
};

export default Sidebar;
