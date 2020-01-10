import React from "react";
const AboutMePage = () => {
  return (
    <React.Fragment>
      <div className="row d-flex justify-content-between">
        <div className="col-sm-12 col-lg-1 col-md-1 text-center p-0 mb-3">
          <h4 className="text-primary">About Me</h4>
        </div>
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-sm-12 p-0 mb-3">
          <h4 className="text-primary">Name: Sarthak Suryakant Chavan</h4>
          <hr />
          <h4 className="text-primary">Email: sarthakchavan290195@gmail.com</h4>
          <hr />
          <h4 className="text-primary">Phone: 437-777-5782</h4>
          <hr />
          <h4 className="text-primary">
            Note: Preferred Calling hours - 9am-7pm (Mon - Sun)
          </h4>
          <hr />
          <div>
            <a
              href="https://1drv.ms/w/s!Aoto3lIIhHTKhwViz5BeBcKfwsBd?e=OT26Uq"
              className="btn btn-success mr-2"
            >
              Resume
            </a>
            <a
              href="https://1drv.ms/w/s!Aoto3lIIhHTKkwSBnlLWOUyK5FBh?e=cKzML9"
              className="btn btn-info mr-2"
            >
              Cover Letter
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMePage;
