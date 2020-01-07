import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Chart extends Component {
  state = {};

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

  renderChart = (title, options, dropdownItems?) => {
    return (
      <div className={"d-flex flex-column card shadow rounded w-100"}>
        <div className="d-flex justify-content-between chart-title-container">
          <span className="text-secondary chart-title mr-2 ml-3">{title}</span>
          {dropdownItems.length > 0 && (
            <div className="mr-2 ml-3">
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                >
                  {options.dropdownTarget}
                </button>
                {
                  <div className="dropdown-menu scrollable-menu">
                    {dropdownItems.map(item => {
                      return (
                        <a
                          className="dropdown-item"
                          href="#"
                          key={item}
                          onClick={this.handleDropdownSelect}
                        >
                          {item}
                        </a>
                      );
                    })}
                    <a
                      className="dropdown-item"
                      href="#"
                      key="All"
                      onClick={this.handleDropdownSelect}
                    >
                      All
                    </a>
                  </div>
                }
              </div>
            </div>
          )}
        </div>
        <div>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    );
  };
}

export default Chart;
