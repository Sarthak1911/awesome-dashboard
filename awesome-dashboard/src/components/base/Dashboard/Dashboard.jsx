import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Navbar from "../../common/Navbar/Navbar";
import Sidebar from "./../../common/Sidebar/Sidebar";
import "./Dashboard.scss";
class Dashboard extends Component {
  state = {
    sidebarStatus: "none"
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

  options = {
    title: {
      text: "My chart"
    },
    series: [
      {
        data: [1, 2, 3]
      }
    ]
  };

  render() {
    const { sidebarStatus } = this.state;

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
              <div className="card">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={this.options}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
