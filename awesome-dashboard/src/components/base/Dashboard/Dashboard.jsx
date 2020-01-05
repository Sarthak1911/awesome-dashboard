import React, { Component } from "react";
import Sidebar from "./../../common/Sidebar/Sidebar";
import "./Dashboard.scss";

class Dashboard extends Component {
  state = {
    sidebarStatus: "full"
  };

  handleToggleSidebarDesktop = () => {
    console.log("Desktop");
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
    console.log("Mobile");
    let { sidebarStatus } = this.state;

    if (sidebarStatus === "icons") {
      sidebarStatus = "none";
      this.setState({ sidebarStatus });
      return;
    }

    sidebarStatus = sidebarStatus === "full" ? "none" : "full";

    this.setState({ sidebarStatus });
  };

  render() {
    const { sidebarStatus } = this.state;

    return (
      <React.Fragment>
        <nav
          className="fixed-top nav bg-light shadow-sm"
          style={{ zIndex: "1" }}
        >
          <div className="d-flex justify-content-between ml-3">
            <i
              className="fa fa-bars toggle-desktop text-primary"
              aria-hidden="true"
              onClick={this.handleToggleSidebarDesktop}
            ></i>
            Nav
          </div>
        </nav>
        <Sidebar
          onToggleSidebarDesktop={this.handleToggleSidebarDesktop}
          onToggleSidebarMobile={this.handleToggleSidebarMobile}
          sidebarStatus={sidebarStatus}
        />
      </React.Fragment>
    );
  }
}

export default Dashboard;
