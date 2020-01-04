import React, { Component } from "react";
import Sidebar from "./../../common/Sidebar/Sidebar";
import NavLink from "./../../common/Sidebar/NavLink/NavLink";

import "./Dashboard.scss";
class Dashboard extends Component {
  state = {
    isOpenSidebar: true
  };

  handleSidebarToggle = ref => {
    let { isOpenSidebar } = this.state;

    isOpenSidebar = !isOpenSidebar;

    this.setState({ isOpenSidebar });

    ref.current.style.display = isOpenSidebar ? "block" : "none";
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar
            brandName="Awesome Dash"
            onToggleSidebar={this.handleSidebarToggle}
          >
            <NavLink to="/" text="Home" icon="fa-home" />
            <NavLink
              to="/dashboard"
              active
              text="Dashboard"
              icon="fa-bar-chart"
            />
            <NavLink to="/about-me" text="About Me" icon="fa-user-o" />
            <NavLink to="/" text="Products" icon="fa-window-maximize" />
            <NavLink to="/" text="Invoices" icon="fa-file" />
            <NavLink to="/" text="Mail Marketing" icon="fa-envelope" />
            <NavLink to="/" text="Chat Room" icon="fa-comments" />
            <NavLink to="/" text="Calendar" icon="fa-calendar" />
            <NavLink to="/" text="Help Center" icon="fa-question-circle" />
            <NavLink to="/" text="Settings" icon="fa-cog" />
          </Sidebar>
        </div>
      </div>
    );
  }
}

export default Dashboard;
