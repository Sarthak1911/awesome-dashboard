import React from "react";
import "./Table.scss";

const Table = ({ data }) => {
  function displayTableHeaders() {
    //Can customize to your liking
    const keys = Object.keys(data[0]);

    //Map the keys to the header
    const headers = keys.map(key => (
      <th className="text-uppercase font-weight-light" key={key}>
        {key}
      </th>
    ));
    return [headers.splice(0, 5), ...headers.splice(headers.length - 1)];
  }

  function displayData() {
    //Can customize to your liking
    const values = Object.values(data);

    return values
      .map(value => (
        <tr key={value.Rank}>
          <td>{value.Rank}</td>
          <td>{value.Name}</td>
          <td>{value.Platform}</td>
          <td>{value.Year}</td>
          <td>{value.Genre}</td>
          <td>{value.Global_Sales}</td>
        </tr>
      ))
      .splice(0, 50);
  }

  return (
    <div className="table-responsive-sm table-responsive-md table-container overflow-auto">
      <table className="table borderless">
        <thead className="bg-light border">
          <tr>{displayTableHeaders()}</tr>
        </thead>
        <tbody>{displayData()}</tbody>
      </table>
    </div>
  );
};

export default Table;
