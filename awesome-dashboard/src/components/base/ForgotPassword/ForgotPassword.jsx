import React, { Component } from "react";
import UserInfoContainer from "./../../common/UserInfoComponents/UserInfoContainer";
import Input from "../../common/FormComponents/Input/Input";
import Button from "./../../common/FormComponents/Button/Button";
import "./ForgotPassword.scss";

class ForgotPassword extends Component {
  state = {};

  formMessage = "Enter your email and we send you a password reset link.";

  style = {};

  render() {
    return (
      <UserInfoContainer formMessage={this.formMessage}>
        <form>
          <div className="col-12 mt-5">
            <Input placeholder="Email" type="text" />
          </div>
          <div className="col-12 mt-4">
            <Button text="Send request" btnType="btn-primary col-6" />
          </div>
        </form>
      </UserInfoContainer>
    );
  }
}

export default ForgotPassword;
