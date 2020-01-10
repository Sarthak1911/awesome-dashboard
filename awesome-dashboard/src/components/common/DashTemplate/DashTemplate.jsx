import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../../common/Navbar/Navbar";
import Sidebar from "./../../common/Sidebar/Sidebar";
import { logoutUser } from "./../../../services/userService";
import Dashboard from "./../../base/Dashboard/Dashboard";
import NotFoundPage from "./../NotFoundPage/NotFoundPage";
import AboutMe from "./../../base/AboutMe/AboutMe";
import "./DashTemplate.scss";

class DashTemplate extends Component {
  state = {
    sidebarStatus: "full"
  };

  constructor(props) {
    super(props);
  }

  getDashboardClasses = () => {
    const { sidebarStatus } = this.state;

    if (sidebarStatus === "icons") return "offset-lg-1 offset-md-1";

    if (sidebarStatus === "full") return "offset-lg-2 offset-md-1";

    if (sidebarStatus === "none") return null;
  };

  handleToggleSidebarDesktop = () => {
    let { sidebarStatus } = this.state;

    //     if (sidebarStatus === "none") {
    //       sidebarStatus = "icons";
    //       this.setState({ sidebarStatus });
    //       return;
    //     }

    sidebarStatus = sidebarStatus === "full" ? "icons" : "full";

    this.setState({ sidebarStatus });
  };

  handleToggleSidebarMobile = () => {
    let { sidebarStatus } = this.state;

    if (sidebarStatus === "icons") {
      sidebarStatus = "none";
      this.setState({ sidebarStatus });
      return;
    }

    sidebarStatus = sidebarStatus === "full" ? "none" : "full";

    this.setState({ sidebarStatus });
  };

  handleLogoutUser = () => {
    console.log("pressed");
    logoutUser("token");
    this.props.history.replace("/login");
  };

  render() {
    const { sidebarStatus } = this.state;

    return (
      <React.Fragment>
        <Navbar
          onLogoutUser={this.handleLogoutUser}
          username={localStorage.getItem("token")}
          onToggleSidebarDesktop={this.handleToggleSidebarDesktop}
        />
        <div className="container-fluid">
          <div className="row">
            <Sidebar
              onToggleSidebarDesktop={this.handleToggleSidebarDesktop}
              onToggleSidebarMobile={this.handleToggleSidebarMobile}
              sidebarStatus={sidebarStatus}
            />
            <div className={"dash-content col "}>{this.props.children}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashTemplate;
