import React, { Component } from "react";
import Highcharts, { color } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Navbar from "../../common/Navbar/Navbar";
import Sidebar from "./../../common/Sidebar/Sidebar";
import Chart from "./../../common/Chart/Chart";
import {
  getAllYears,
  getGlobalSalesPerPlatform,
  getGlobalSalesSelectedPlatform,
  getAllPlatforms
} from "./../../../services/gameService";
import "./Dashboard.scss";
class Dashboard extends Chart {
  state = {
    sidebarStatus: "full",
    platformSales: {}
  };

  constructor(props) {
    super(props);
    this.state.platformSales = this.getOption(
      "areaspline",
      getAllYears(),
      getGlobalSalesPerPlatform()
    );
  }

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

  handleDropdownSelect = ({ target }) => {
    const platform = target.innerHTML;
    const series =
      platform === "All"
        ? getGlobalSalesPerPlatform()
        : getGlobalSalesSelectedPlatform(platform);

    this.setState({
      platformSales: {
        series,
        dropdownTarget: platform
      }
    });
  };

  render() {
    const { sidebarStatus, platformSales } = this.state;

    return (
      <React.Fragment>
        <Navbar onToggleSidebarDesktop={this.handleToggleSidebarDesktop} />
        <div className="container-fluid">
          <div className="row">
            <Sidebar
              onToggleSidebarDesktop={this.handleToggleSidebarDesktop}
              onToggleSidebarMobile={this.handleToggleSidebarMobile}
              sidebarStatus={sidebarStatus}
            />
            <div className="dash-content offset-lg-2 offset-md-4 col">
              <h3 className="text-secondary">Overview</h3>
              <div className="col-12 m-0 p-0">
                {this.renderChart("Sales", platformSales, getAllPlatforms())}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
