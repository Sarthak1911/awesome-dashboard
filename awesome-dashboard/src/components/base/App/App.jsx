import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../Login/Login";
import NotFoundPage from "../../common/NotFoundPage/NotFoundPage";
import SignUp from "./../SignUp/SignUp";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import Dashboard from "../Dashboard/Dashboard";
import "./App.scss";

class App extends Component {
  state = {};

  token = "token";

  render() {
    return (
      <div className="content" style={{ height: "100vh", overflow: "auto" }}>
        <Switch>
          <Route
            path="/login"
            exact
            render={props => {
              if (localStorage.getItem(this.token)) {
                return <Redirect to="/dashboard" />;
              }
              return <Login {...props} />;
            }}
          />
          <Route
            path="/sign-up"
            exact
            render={props => {
              if (localStorage.getItem(this.token)) {
                return <Redirect to="/dashboard" />;
              }
              return <SignUp {...props} />;
            }}
          />
          <Route
            path="/forgot-password"
            exact
            render={props => {
              if (localStorage.getItem(this.token)) {
                return <Redirect to="/dashboard" />;
              }
              return <ForgotPassword {...props} />;
            }}
          />
          <Route
            path="/dashboard"
            exact
            render={props => {
              if (!localStorage.getItem(this.token)) {
                return <Redirect to="/login" />;
              }
              return <Dashboard {...props} />;
            }}
          />
          <Route path="/not-found" exact component={NotFoundPage} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
