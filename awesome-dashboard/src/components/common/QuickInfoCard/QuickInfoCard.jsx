import React from "react";
import "./QuickInfoCard.scss";
const QuickInfoCard = props => {
  const { title, info, extraInfo, type } = props;

  function getColorIcon() {
    if (type === "success") return "text-gradient-success";
    if (type === "primary") return "text-gradient-primary";
    if (type === "info") return "text-gradient-info";
  }

  function getColorText() {
    if (type === "success") return "text-success";
    if (type === "primary") return "text-primary";
    if (type === "info") return "text-info";
  }

  return (
    <div className="card rounded shadow p-3 w-100">
      <div className="mb-2">
        <span className="text-secondary">{title}</span>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column justify-content-center">
          <span className="h4 text-dark">{info}</span>
          <span className={getColorText()}>{extraInfo}</span>
        </div>
        <div>
          <i
            className={"fa fa-4x fa-signal " + getColorIcon()}
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default QuickInfoCard;
