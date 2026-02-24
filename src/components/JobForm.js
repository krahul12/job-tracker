import React, { useState } from "react";

function JobForm({ addJob }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company.trim() || !role.trim()) {
      alert("All fields are required!");
      return;
    }

    addJob({
      company: company.trim(),
      role: role.trim(),
      status,
    });

    setCompany("");
    setRole("");
    setStatus("Applied");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Rejected">Rejected</option>
        <option value="Offer">Offer</option>
      </select>

      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;