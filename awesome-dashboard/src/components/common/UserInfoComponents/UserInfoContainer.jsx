import React from "react";
import "./UserInfoContainer.scss";
const UserInfoContainer = props => {
  const { formMessage } = props;

  return (
    <div className="user-info container-fluid">
      <div className="row d-flex align-items-strech">
        <div className="d-flex col-lg-7 col-md-6 col-sm-12 image-area align-items-center justify-content-center">
          <div className="text-center brand-message-sm">
            <h3 className="text-uppercase">Awesome Dash</h3>
            <p className="muted">{formMessage}</p>
          </div>
        </div>
        <div className="d-flex flex-column col-lg-5 col-md-6 col-sm-12 info-form">
          <div className="d-flex info-form-child justify-content-center align-items-center">
            <div className="text-center col-lg-6 col-md-8 col-sm-12">
              <div className="brand-message-lg">
                <h3 className="text-uppercase">Awesome Dash</h3>
                <br />
                <p className="text-muted">{formMessage}</p>
              </div>
              {props.children}
            </div>
          </div>
          <button className="btn btn-link text-center text-primary">
            Terms of use. Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoContainer;
