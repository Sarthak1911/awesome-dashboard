import React, { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import Sidebar from "./../../common/Sidebar/Sidebar";
import Chart from "./../../common/Chart/Chart";
import Table from "./../../common/table/table";
import {
  getAll,
  getAllYears,
  getGlobalSalesPerPlatform,
  getGlobalSalesSelectedPlatform,
  getAllPlatforms,
  getTopShares
} from "./../../../services/gameService";
import "./Dashboard.scss";

class Dashboard extends Chart {
  state = {
    sidebarStatus: "full",
    platformSales: {},
    gamesShare: {},
    platformSalesDuplicate: {}
  };

  constructor(props) {
    super(props);

    this.state.gamesShare = this.getPieChartOption([...getTopShares()]);

    this.state.platformSales = this.getOption(
      "areaspline",
      getAllYears(),
      getGlobalSalesPerPlatform()
    );

    this.state.platformSalesDuplicate = this.getOption(
      "line",
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

  handleDropdownSelect = e => {
    const platform = e.target.innerHTML;
    const chartOptions = e.target.name;

    const series =
      platform === "All"
        ? getGlobalSalesPerPlatform()
        : getGlobalSalesSelectedPlatform(platform);

    this.setState({
      [chartOptions]: {
        series,
        dropdownTarget: platform
      }
    });
  };

  render() {
    const { sidebarStatus, platformSales, platformSalesDuplicate } = this.state;

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
              <h3 className="text-secondary ml-3">Overview</h3>
              <div className="row m-0 p-0 dash-content-children">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  {this.renderChart(
                    "Sales Areaspline",
                    platformSales,
                    "platformSales",
                    getAllPlatforms()
                  )}
                </div>
                <div className="col-lg-3 offset-lg-1 col-md-3 offset-md-1 col-sm-12">
                  {this.renderPieChart(
                    "Highest number of games in the market",
                    Object.values(getTopShares()[0])[0]
                  )}
                </div>
              </div>
              <div className="row m-0 p-0 dash-content-children">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="card shadow rounded p-1">
                    <div className="bg-white text-secondary card-header border-0 m-0">
                      Top 50 Games
                    </div>
                    <div className="card-body m-0 p-0">
                      <Table data={getAll()} />
                    </div>
                    <div className="card-footer bg-white m-0 p-2">
                      Show more
                    </div>
                  </div>
                </div>
                <div className="offset-md-1 offset-lg-1 col-lg-5 col-md-5 col-sm-12">
                  {this.renderChart(
                    "Sales Line",
                    platformSalesDuplicate,
                    "platformSalesDuplicate",
                    getAllPlatforms()
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
