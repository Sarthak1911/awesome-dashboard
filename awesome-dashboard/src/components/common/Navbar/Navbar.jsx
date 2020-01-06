import React from "react";
import "./Navbar.scss";
const Navbar = ({ onToggleSidebarDesktop }) => {
  return (
    <nav
      className="d-flex justify-content-between align-items-center fixed-top bg-white shadow-sm"
      style={{ zIndex: "1" }}
    >
      <div className="d-flex justify-content-between align-items-center col-sm-2 col-lg-2 col-md-4">
        <div className="p-2">
          <i
            className="fa fa-bars toggle-desktop"
            aria-hidden="true"
            onClick={onToggleSidebarDesktop}
          ></i>
        </div>
        <div>
          <span className="brand-name">Awesome Dash</span>
        </div>
      </div>
      <div className="d-flex justify-content-end col-sm-10 col-lg-10 col-md-8">
        <div className="d-flex align-items-center nav-icons-container">
          <i
            className="fa fa-question-circle text-secondary p-2"
            aria-hidden="true"
          ></i>
          <i
            className="fa fa-comments text-secondary p-2"
            aria-hidden="true"
            onClick={onToggleSidebarDesktop}
          ></i>
          <i
            className="fa fa-bell text-secondary p-2 mr-1"
            aria-hidden="true"
            onClick={onToggleSidebarDesktop}
          ></i>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <a className="btn btn-link dropdown-toggle text-dark" href="#">
              Jon Doe
            </a>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/40"
              alt=""
              className="rounded-circle"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
