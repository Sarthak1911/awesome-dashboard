import React from "react";
const UserInfoContainer = props => {
  const { formMessage } = props;

  return (
    <div className="user-info container-fluid">
      <div className="row">
        <div className="col-lg-7 col-md-12 col-sm-12">Some text</div>
        <div className="col-lg-5 col-md-12 info-form">
          <div className="d-flex info-form-child justify-content-center align-items-center">
            <div className="text-center col-lg-6 col-md-8 col-sm-8">
              <h3 className="text-uppercase">Awesome Dash</h3>
              <p className="text-muted">{formMessage}</p>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoContainer;
