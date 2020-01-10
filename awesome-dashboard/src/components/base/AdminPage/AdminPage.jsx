import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./../../common/Navbar/Navbar";
import Sidebar from "./../../common/Sidebar/Sidebar";
import DashboardPage from "./../DashboardPage/DashboardPage";
import AboutMePage from "./../AboutMePage/AboutMePage";
import "./AdminPage.scss";
class AdminPage extends Component {
  state = {
    sidebarStatus: "icons"
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

  getMainContentClasses = () => {
    const { sidebarStatus } = this.state;

    if (sidebarStatus === "full") return "offset-lg-2 offset-md-4 w-75";
    if (sidebarStatus === "icons") return "w-75";
    if (sidebarStatus === "none") return "w-100";
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
        <Sidebar
          onToggleSidebarDesktop={this.handleToggleSidebarDesktop}
          onToggleSidebarMobile={this.handleToggleSidebarMobile}
          sidebarStatus={sidebarStatus}
        />
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className={this.getMainContentClasses()}>
              <main>
                <Switch>
                  <Route
                    path="/admin/dashboard"
                    exact
                    render={props => <DashboardPage {...props} />}
                  />
                  <Route
                    path="/admin/about-me"
                    exact
                    render={props => <AboutMePage {...props} />}
                  />
                  <Redirect path="/admin" to="/admin/home" />
                </Switch>
              </main>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminPage;
