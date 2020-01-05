import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.scss";

class Dashboard extends Component {
  state = {
    sidebarStatus: "full"
  };

  constructor() {
    super();
  }

  getSidebarClasses = () => {
    const { sidebarStatus } = this.state;

    if (sidebarStatus === "full") return "sidebar-full col-lg-2 col-md-4";

    if (sidebarStatus === "icons") return "sidebar-icons";

    if (sidebarStatus === "none") return "sidebar-none";
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
    return (
      <React.Fragment>
        {/* Button for mobile */}
        <i
          className="fa fa-bars toggle-mobile"
          aria-hidden="true"
          onClick={this.handleToggleSidebarMobile}
        ></i>
        <div
          className={
            "p-0 m-0 position-fixed sidebar bg-primary " +
            this.getSidebarClasses()
          }
        >
          <Link to="/" className="navitem text-light brand">
            <div>
              <span className="brand-name">Awesome Dash</span>
              {/* Button for desktop */}
              <i
                className="fa fa-bars toggle-desktop"
                aria-hidden="true"
                onClick={this.handleToggleSidebarDesktop}
              ></i>
              {/* Button for mobile */}
              <i
                className="fa fa-bars toggle-mobile"
                aria-hidden="true"
                onClick={this.handleToggleSidebarMobile}
              ></i>
            </div>
          </Link>
          <Link to="/" className="navitem text-light active">
            <div>
              <i className="fa fa-home" aria-hidden="true"></i>
              <span className="nav-text">Link 1</span>
            </div>
          </Link>
          <Link to="/" className="navitem text-light">
            <div>
              <i className="fa fa-user-o" aria-hidden="true"></i>
              <span className="nav-text">Link 2</span>
            </div>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
