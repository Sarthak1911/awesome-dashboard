import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./../FormComponents/NavItem/NavItem";
import "./Sidebar.scss";

const Sidebar = ({
  onToggleSidebarDesktop,
  onToggleSidebarMobile,
  sidebarStatus
}) => {
  const getSidebarClasses = () => {
    if (sidebarStatus === "full") return "sidebar-full col-lg-2 col-md-4";

    if (sidebarStatus === "icons") return "sidebar-icons";

    if (sidebarStatus === "none") return "sidebar-none";
  };

  return (
    <div
      className={
        "p-0 m-0 position-fixed sidebar bg-primary " + getSidebarClasses()
      }
    >
      <Link to="/" className="navitem text-light brand">
        <div>
          <span className="brand-name">Awesome Dash</span>
          {/* Button for desktop */}
          <i
            className="fa fa-bars toggle-desktop"
            aria-hidden="true"
            onClick={onToggleSidebarDesktop}
          ></i>
          {/* Button for mobile */}
          <i
            className="fa fa-bars toggle-mobile"
            aria-hidden="true"
            onClick={onToggleSidebarMobile}
          ></i>
        </div>
      </Link>
      <NavItem to="/" text="home" icon="fa-home" />
      <NavItem to="/dashboard" text="dashboard" icon="fa-bar-chart" />
    </div>
  );
};

export default Sidebar;
