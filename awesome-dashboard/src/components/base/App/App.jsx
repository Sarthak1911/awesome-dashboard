import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../Login/Login";
import NotFoundPage from "../../common/NotFoundPage/NotFoundPage";
import SignUp from "./../SignUp/SignUp";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/forgot-password" component={SignUp} />
          <Route path="/not-found" component={NotFoundPage} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
