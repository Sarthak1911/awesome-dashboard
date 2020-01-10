import React from "react";
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
      <a href="#" className="navitem text-light brand">
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
      </a>
      <NavItem to="/admin/home" text="home" icon="fa-home" />
      <NavItem to="/admin/dashboard" text="dashboard" icon="fa-bar-chart" />
      <NavItem to="/admin/about-me" text="about me" icon="fa-user-o" />
      <NavItem to="/admin/products" text="products" icon="fa-product-hunt" />
      <NavItem to="/admin/invoices" text="invoices" icon="fa-book" />
      <NavItem
        to="/admin/mail-marketing"
        text="mail marketing"
        icon="fa-envelope"
      />
      <NavItem to="/admin/chat-room" text="chat-room" icon="fa-comments" />
      <NavItem to="/admin/calendar" text="calendar" icon="fa-calendar" />
      <NavItem
        to="/admin/help-center"
        text="help center"
        icon="fa-question-circle"
      />
      <NavItem to="/admin/settings" text="settings" icon="fa-cog" />
    </div>
  );
};

export default Sidebar;
