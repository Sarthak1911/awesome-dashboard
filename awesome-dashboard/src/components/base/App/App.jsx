import React, { Component } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import NotFoundPage from "../../common/NotFoundPage/NotFoundPage";
import SignUp from "./../SignUp/SignUp";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import AdminPage from "../AdminPage/AdminPage";
import "./App.scss";

class App extends Component {
  state = {};

  token = "token";

  render() {
    return (
      <div className="content" style={{ height: "100vh", overflow: "auto" }}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/login"
              exact
              render={props => {
                if (localStorage.getItem("token"))
                  return <Redirect to="/admin" />;
                return <Login {...props} />;
              }}
            />
            <Route
              path="/sign-up"
              exact
              render={props => {
                if (localStorage.getItem("token"))
                  return <Redirect to="/admin" />;
                return <SignUp {...props} />;
              }}
            />
            <Route
              path="/forgot-password"
              exact
              render={props => {
                if (localStorage.getItem("token"))
                  return <Redirect to="/admin" />;
                return <ForgotPassword {...props} />;
              }}
            />
            <Route
              path="/not-found"
              exact
              render={props => <NotFoundPage {...props} />}
            />
            <Route
              path="/admin"
              render={props => {
                if (!localStorage.getItem("token"))
                  return <Redirect to="/login" />;
                return <AdminPage {...props} />;
              }}
            />
            <Redirect exact path="/" to="/login" />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
