import React from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import UserInfoContainer from "../../common/UserInfoComponents/UserInfoContainer";
import Form from "../../common/Form/form";
import Button from "../../common/FormComponents/Button/Button";
import "./Login.scss";
class Login extends Form {
  state = {
    data: {
      username: "",
      password: "",
      rememberMe: false
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password"),
    rememberMe: Joi.optional()
  };

  handleSignUp = e => {
    e.preventDefault();
    this.props.history.push("/sign-up");
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  formMessage = "Welcome back! Please login to your account.";

  render() {
    return (
      <UserInfoContainer formMessage={this.formMessage}>
        <form>
          <div className="mt-5">
            {this.renderInput("username", "text", "Username")}
            {this.renderInput("password", "password", "Password")}
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4">
            {this.renderCheckBox("rememberMe", "remember me")}
            <Link className="btn btn-link text-primary" to="/forgot-password">
              Forgot Password
            </Link>
          </div>

          <div className="row mt-5 d-flex justify-content-center">
            {this.renderSubmitButton(
              "Login",
              "btn-primary col-lg col-md-6 col-sm-8"
            )}
            <Button
              className="btn-outline-primary col-lg col-md-6 col-sm-8"
              text="Sign Up"
              onButtonClicked={this.handleSignUp}
              disabled={false}
            />
          </div>
        </form>
      </UserInfoContainer>
    );
  }
}

export default Login;
