import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../Login/LoginPage";
import NotFoundPage from "../../common/NotFoundPage/NotFoundPage";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/not-found" component={NotFoundPage} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
