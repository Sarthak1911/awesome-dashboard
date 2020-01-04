import React, { Component } from "react";
import UserInfoContainer from "../../common/UserInfoComponents/UserInfoContainer";
import Input from "../../common/FormComponents/Input/Input";
import Button from "../../common/FormComponents/Button/Button";
import Checkbox from "../../common/FormComponents/Input/Checkbox";
import "./Login.scss";
class Login extends Component {
  state = {};

  formMessage = "Welcome back! Please login to your account.";

  render() {
    return (
      <UserInfoContainer formMessage={this.formMessage}>
        <form>
          <div className="mt-5">
            <Input placeholder="Username" type="text" />
            <Input placeholder="Password" type="password" />
          </div>
          <div className="d-flex justify-content-between align-items-center  mt-4">
            <Checkbox label="Remember Me" />
            <button className="btn btn-link text-primary">
              Forgot password
            </button>
          </div>
          <div className="row mt-5">
            <Button text="Login" btnType="btn-primary col-lg col-md col-sm-8" />
            <Button
              text="Sign Up"
              btnType="btn-outline-primary col-lg col-md col-sm-8"
            />
          </div>
        </form>
      </UserInfoContainer>
    );
  }
}

export default Login;
