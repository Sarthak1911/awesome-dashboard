import React from "react";
import Joi from "joi-browser";
import Form from "../../common/Form/form";
import UserInfoContainer from "./../../common/UserInfoComponents/UserInfoContainer";
import "./ForgotPassword.scss";

class ForgotPassword extends Form {
  state = {
    data: {
      email: ""
    },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  formMessage = "Enter your email and we send you a password reset link.";

  render() {
    return (
      <UserInfoContainer formMessage={this.formMessage}>
        <form>
          <div className="col-12 mt-5">
            {this.renderInput("email", "email", "Email")}
          </div>
          <div className="col-12 mt-4">
            {this.renderSubmitButton("Send Request", "btn btn-primary")}
          </div>
        </form>
      </UserInfoContainer>
    );
  }
}

export default ForgotPassword;
