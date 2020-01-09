import React from "react";
import { Link } from "react-router-dom";
import NavItem from "../NavItem/NavItem";
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
      <Link to="/dashboard" className="navitem text-light brand">
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
      <NavItem to="/home" text="home" icon="fa-home" />
      <NavItem to="/dashboard" text="dashboard" icon="fa-bar-chart" />
      <NavItem to="/about-me" text="about me" icon="fa-user-o" />
      <NavItem to="/products" text="products" icon="fa-product-hunt" />
      <NavItem to="/invoices" text="invoices" icon="fa-book" />
      <NavItem to="/mail-marketing" text="mail marketing" icon="fa-envelope" />
      <NavItem to="/chat-room" text="chat-room" icon="fa-comments" />
      <NavItem to="/calendar" text="calendar" icon="fa-calendar" />
      <NavItem to="/help-center" text="help center" icon="fa-question-circle" />
      <NavItem to="/settings" text="settings" icon="fa-cog" />
    </div>
  );
};

export default Sidebar;
