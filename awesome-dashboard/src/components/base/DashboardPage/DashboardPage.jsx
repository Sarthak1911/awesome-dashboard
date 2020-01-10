import React, { Component } from "react";
class DashboardPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row d-flex justify-content-between mb-4">
          <div className="col-lg-3 col-md-6 col-sm-12 border">
            Quick Info Cards
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 border">
            Quick Info Cards
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 border">
            Quick Info Cards
          </div>
        </div>
        <div className="row d-flex justify-content-between mb-4">
          <div className="col-lg-8 col-md-6 col-sm-12 border">
            AreaSpline Graph
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 border">Pie Chart</div>
        </div>
        <div className="row d-flex justify-content-between mb-4">
          <div className="col-lg-6 col-md-6 col-sm-12 border">Table</div>
          <div className="col-lg-5 col-md-6 col-sm-12 border">Line Graph</div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardPage;
