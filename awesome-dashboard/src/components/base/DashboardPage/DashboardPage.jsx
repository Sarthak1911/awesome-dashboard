import React, { Component } from "react";
import QuickInfoCard from "./../../common/QuickInfoCard/QuickInfoCard";
import Chart from "../../common/Chart/Chart";
import TableCard from "./../../common/TableCard/TableCard";
import {
  getAll,
  getAllYears,
  getGlobalSalesPerPlatform,
  getGlobalSalesSelectedPlatform,
  getAllPlatforms,
  getTopShares,
  getGenreWithMostGames
} from "./../../../services/gameService";

import "./DashboardPage.scss";

class DashboardPage extends Chart {
  state = {
    platformSales: {},
    gamesShare: {},
    platformSalesDuplicate: {}
  };

  constructor() {
    super();
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
        <div className="row d-flex justify-content-between">
          <div className="col-sm-12 col-lg-1 col-md-1 text-center p-0 mb-3">
            <h4 className="text-primary">Overview</h4>
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-lg-3 col-md-6 col-sm-12 p-0 mb-3">
            <QuickInfoCard
              title="Top ranked game"
              info={getAll()[0].Name}
              extraInfo={getAll()[0].Global_Sales + "%"}
              type="success"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12  p-0 mb-3">
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
          <div className="col-lg-3 col-md-6 col-sm-12  p-0 mb-3">
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
        <div className="row d-flex justify-content-between">
          <div className="col-lg-8 col-md-6 col-sm-12 p-0 mb-3">
            {this.renderChart(
              "Sales Areaspline Graph",
              platformSales,
              "platformSales",
              getAllPlatforms()
            )}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-0 mb-3">
            {this.renderPieChart(
              "Highest share",
              Object.values(getTopShares()[0])[0]
            )}
          </div>
        </div>
        <div className="row d-flex justify-content-between mb-4">
          <div className="col-lg-6 col-md-6 col-sm-12 p-0 mb-3">
            <TableCard title="Top 50 games" />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 p-0 mb-3">
            {this.renderChart(
              "Sales Line Graph",
              platformSalesDuplicate,
              "platformSalesDuplicate",
              getAllPlatforms()
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardPage;
