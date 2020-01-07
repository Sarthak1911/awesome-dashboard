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
  render() {
    return (
      <div className="content" style={{ height: "100vh", overflow: "auto" }}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
          <Route path="/not-found" exact component={NotFoundPage} />
          <Route path="/" exact component={Dashboard} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
