import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Chart extends Component {
  state = {};

  getPieChartOption = data => {
    return {
      chart: {
        type: "pie",
        style: {
          fontFamily: "Segoe UI"
        },
        height: "100%"
      },
      title: {
        style: {
          display: "none"
        }
      },
      legend: {
        align: "center"
      },
      series: [
        {
          name: "Games",
          data: data,
          size: "80%",
          innerSize: "80%",
          showInLegend: true,
          dataLabels: {
            enabled: false
          }
        }
      ]
    };
  };

  getOption = (type, categories, series) => {
    return {
      chart: {
        type: type,
        style: {
          fontFamily: "Segoe UI"
        }
      },
      title: {
        style: {
          display: "none"
        }
      },
      xAxis: {
        title: {
          style: {
            display: "none"
          }
        },
        categories: categories,
        scrollbar: {
          enabled: true
        }
      },
      yAxis: {
        title: {
          style: {
            display: "none"
          }
        },
        min: 0,
        max: 100
      },
      legend: {
        align: "left"
      },
      dropdownTarget: "All",
      series: series
    };
  };

  renderPieChart = (title, top) => {
    const { gamesShare } = this.state;

    return (
      <div className="d-flex flex-column card shadow rounded w-100 p-1">
        <div className="card-header bg-white p-1">
          <div className="text-secondary col">{title}</div>
          <div className="d-flex justify-content-between col">
            <span>Most games in the market:</span>
            <span className="text-success">
              {/* Get the platform with the most games in the market */}
              {top}
            </span>
          </div>
        </div>
        <div className="card-body m-0 p-0">
          <HighchartsReact highcharts={Highcharts} options={gamesShare} />
        </div>
        <div className="card-footer bg-white text-center m-0 p-2">
          View Report
        </div>
      </div>
    );
  };

  renderChart = (title, options, dropdownId?, dropdownItems?) => {
    return (
      <div className={"d-flex flex-column card shadow rounded w-100 p-1"}>
        <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center">
          <span className="text-secondary">{title}</span>
          {dropdownItems.length > 0 && (
            <div className="dropdown m-0 p-0">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id={dropdownId}
                data-toggle="dropdown"
              >
                {options.dropdownTarget}
              </button>
              {
                <div className="dropdown-menu scrollable-menu">
                  <a
                    name={dropdownId}
                    className="dropdown-item"
                    href="#"
                    key="All"
                    onClick={this.handleDropdownSelect}
                  >
                    All
                  </a>
                  {dropdownItems.map(item => {
                    return (
                      <a
                        name={dropdownId}
                        className="dropdown-item"
                        href="#"
                        key={item}
                        onClick={this.handleDropdownSelect}
                      >
                        {item}
                      </a>
                    );
                  })}
                </div>
              }
            </div>
          )}
        </div>
        <div className="card-body m-0 p-0">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    );
  };
}

export default Chart;
