import React, { Component } from "react";
import DashTemplate from "./../../common/DashTemplate/DashTemplate";
import "./AboutMe.scss";

class AboutMe extends DashTemplate {
  render() {
    return (
      <DashTemplate>
        <div className={"dash-content col " + this.getDashboardClasses()}>
          <h2>About Me</h2>
        </div>
      </DashTemplate>
    );
  }
}

export default AboutMe;
