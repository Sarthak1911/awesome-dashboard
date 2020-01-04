import React, { Component } from "react";
import UserInfoContainer from "../../common/UserInfoComponents/UserInfoContainer";
import Input from "../../common/FormComponents/Input/Input";
import Button from "../../common/FormComponents/Button/Button";
import Checkbox from "../../common/FormComponents/Input/Checkbox";
import { Link } from "react-router-dom";
import "./Login.scss";
class Login extends Component {
  state = {};

  handleSignUp = e => {
    e.preventDefault();
    this.props.history.push("/sign-up");
  };

  formMessage = "Welcome back! Please login to your account.";

  render() {
    return (
      <UserInfoContainer formMessage={this.formMessage}>
        <form>
          <div className="mt-5">
            <Input placeholder="Username" type="text" />
            <Input placeholder="Password" type="password" />
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center mt-4">
            <Checkbox label="Remember Me" />
            <Link className="btn btn-link text-primary" to="/forgot-password">
              Forgot Password
            </Link>
          </div>
          <div className="row mt-5 d-flex justify-content-center">
            <Button
              text="Login"
              btnType="btn-primary col-lg col-md-6 col-sm-8"
            />
            <Button
              text="Sign Up"
              btnType="btn-outline-primary col-lg col-md-6 col-sm-8"
              onButtonClicked={this.handleSignUp}
            />
          </div>
        </form>
      </UserInfoContainer>
    );
  }
}

export default Login;
