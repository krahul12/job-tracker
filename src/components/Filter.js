import React from "react";

function Filter({ setFilter, setSearch }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Rejected">Rejected</option>
        <option value="Offer">Offer</option>
      </select>

      <input
        type="text"
        placeholder="Search Company"
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
}

export default Filter;