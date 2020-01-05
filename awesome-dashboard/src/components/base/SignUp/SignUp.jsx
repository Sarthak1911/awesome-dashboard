import React from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import Form from "./../../common/Form/form";
import UserInfoContainer from "./../../common/UserInfoComponents/UserInfoContainer";

import "./SignUp.scss";

class SignUp extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false
    },
    errors: {}
  };

  schema = {
    firstName: Joi.string()
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .label("Last Name"),
    username: Joi.string()
      .required()
      .label("Username"),
    email: Joi.string()
      .email()
      .required()
      .label("Email Address"),
    password: Joi.string()
      .required()
      .label("Password"),
    confirmPassword: Joi.string()
      .required()
      .label("Confirm password"),
    agreeTerms: Joi.optional()
  };

  doSubmit = () => {
    let { password, confirmPassword } = this.state.data;

    if (password !== confirmPassword) {
      this.setState({ errors: { confirmPassword: "Passwords don't match" } });
      return;
    }

    console.log("Submitted");
  };

  formMessage = "Please complete to create your account.";

  render() {
    return (
      <UserInfoContainer formMessage={this.formMessage}>
        <form>
          <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              {this.renderInput("firstName", "text", "First Name")}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              {this.renderInput("lastName", "text", "Last Name")}
            </div>
            <div className="col-12">
              {this.renderInput("username", "text", "Username")}
            </div>
            <div className="col-12">
              {this.renderInput("email", "email", "Email")}
            </div>
            <div className="col-12">
              {this.renderInput("password", "password", "Password")}
            </div>
            <div className="col-12">
              {this.renderInput("confirmPassword", "text", "Confirm password")}
            </div>
          </div>
          <div className="mt-5">
            {this.renderCheckBox(
              "agreeTerms",
              "I agree with terms and conditions"
            )}
          </div>
          <div className="mt-5">
            {this.renderSubmitButton("Sign Up", "btn-primary col-6")}
          </div>
          <Link to="/login" className="btn btn-link text-primary mt-4">
            Already have an account?
          </Link>
        </form>
      </UserInfoContainer>
    );
  }
}

export default SignUp;
