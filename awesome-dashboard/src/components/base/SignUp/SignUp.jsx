import React, { Component } from "react";
import UserInfoContainer from "./../../common/UserInfoComponents/UserInfoContainer";
import Input from "../../common/FormComponents/Input/Input";
import Checkbox from "./../../common/FormComponents/Input/Checkbox";
import Button from "./../../common/FormComponents/Button/Button";

import "./SignUp.scss";

class SignUp extends Component {
  state = {};

  formMessage = "Please complete to create your account.";

  render() {
    return (
      <UserInfoContainer formMessage={this.formMessage}>
        <form>
          <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Input placeholder="First Name" type="text" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Input placeholder="Last Name" type="text" />
            </div>
            <div className="col-12">
              <Input placeholder="Username" type="text" />
            </div>
            <div className="col-12">
              <Input placeholder="Email" type="email" />
            </div>
            <div className="col-12">
              <Input placeholder="Password" type="password" />
            </div>
            <div className="col-12">
              <Input placeholder="Confirm Password" type="password" />
            </div>
          </div>
          <div className="d-flex col justify-content-center">
            <Checkbox label="I agree with terms and conditions" />
          </div>
          <div className="mt-5">
            <Button text="Sign Up" btnType="btn-primary col-6" />
          </div>
          <button className="btn btn-link text-primary mt-4">
            Already have an account?
          </button>
        </form>
      </UserInfoContainer>
    );
  }
}

export default SignUp;
