import React, { Component } from "react";
import UserInfoContainer from "../../common/UserInfoComponents/UserInfoContainer";
import Input from "../../common/FormComponents/Input/Input";
import Button from "../../common/FormComponents/Button/Button";
import Checkbox from "../../common/FormComponents/Input/Checkbox";
import "./Login.scss";
class Login extends Component {
  state = {
    formMessage: "Welcome back! Please login to your account."
  };
  render() {
    const { formMessage } = this.state;

    return (
      <UserInfoContainer formMessage={formMessage}>
        <form>
          <div className="mt-5">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
          </div>
          <div className="d-flex justify-content-between align-items-center  mt-4">
            <Checkbox label="Remember Me" />
            <button className="btn btn-link text-primary">
              Forgot password
            </button>
          </div>
          <div className="d-flex mt-5">
            <Button text="Login" style="btn-primary" />
            <Button text="Sign Up" style="btn-outline-primary" />
          </div>
        </form>
      </UserInfoContainer>
    );
  }
}

export default Login;
