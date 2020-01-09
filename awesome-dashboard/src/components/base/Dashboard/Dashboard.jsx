import React from "react";
import Navbar from "../../common/Navbar/Navbar";
import Sidebar from "./../../common/Sidebar/Sidebar";
import Chart from "./../../common/Chart/Chart";
import Table from "../../common/Table/Table";
import QuickInfoCard from "./../../common/QuickInfoCard/QuickInfoCard";
import {
  getAll,
  getAllYears,
  getGlobalSalesPerPlatform,
  getGlobalSalesSelectedPlatform,
  getAllPlatforms,
  getTopShares,
  getGenreWithMostGames
} from "./../../../services/gameService";
import { logoutUser } from "./../../../services/userService";
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

  handleLogoutUser = () => {
    console.log("pressed");
    logoutUser("token");
    this.props.history.replace("/login");
  };

  render() {
    const { sidebarStatus, platformSales, platformSalesDuplicate } = this.state;

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
            <div className={"dash-content col " + this.getDashboardClasses()}>
              <div>
                <h3 className="text-primary font-weight-light ml-3">
                  Overview
                </h3>
                <div className="d-lg-flex d-md-flex justify-content-between row m-0 p-0 dash-content-children">
                  <div className="col-lg-3 col-md-4 col-sm-12">
                    <QuickInfoCard
                      title="Top ranked game"
                      info={getAll()[0].Name}
                      extraInfo={getAll()[0].Global_Sales + "%"}
                      type="success"
                    />
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-12">
                    <QuickInfoCard
                      title="Total games"
                      info={
                        [
                          ...getAll().length.toString()[0],
                          ...getAll().length.toString()[1]
                        ].join("") + "k"
                      }
                      type="primary"
                    />
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-12">
                    <QuickInfoCard
                      title="Top genre"
                      info={getGenreWithMostGames().genre}
                      extraInfo={
                        [
                          ...getGenreWithMostGames().games.toString()[0],
                          ...getGenreWithMostGames().games.toString()[1]
                        ].join("") + "k"
                      }
                      type="info"
                    />
                  </div>
                </div>
                <div className="d-lg-flex d-md-flex justify-content-between row m-0 p-0 dash-content-children">
                  <div className="col-lg-9 col-md-9 col-sm-12">
                    {this.renderChart(
                      "Sales Areaspline",
                      platformSales,
                      "platformSales",
                      getAllPlatforms()
                    )}
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    {this.renderPieChart(
                      "Highest share",
                      Object.values(getTopShares()[0])[0]
                    )}
                  </div>
                </div>
                <div className="d-lg-flex d-md-flex justify-content-between row m-0 p-0 dash-content-children">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="card shadow rounded p-1">
                      <div className="bg-white text-secondary card-header border-0 m-0">
                        Top 50 Games
                      </div>
                      <div className="card-body m-0 p-0">
                        <Table data={getAll()} />
                      </div>
                      <div className="card-footer bg-white m-0 p-2">
                        <span className="btn btn-link">Show more</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
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
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
