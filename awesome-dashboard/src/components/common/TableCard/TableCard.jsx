import React from "react";
import Table from "../../common/Table/Table";
import { getAll } from "../../../services/gameService";
const TableCard = ({ title }) => {
  return (
    <div className="card shadow rounded p-1">
      <div className="bg-white text-secondary card-header border-0 m-0">
        {title}
      </div>
      <div className="card-body m-0 p-0">
        <Table data={getAll()} />
      </div>
      <div className="card-footer bg-white m-0 p-2">
        <span className="btn btn-link">Show more</span>
      </div>
    </div>
  );
};

export default TableCard;
