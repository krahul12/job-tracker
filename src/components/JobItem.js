import React from "react";

function JobItem({ job, deleteJob, updateStatus }) {
  return (
    <div className="job-card">
      <h3>{job.company}</h3>
      <p>{job.role}</p>

      <select
        value={job.status}
        onChange={(e) => updateStatus(job.id, e.target.value)}
      >
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Rejected">Rejected</option>
        <option value="Offer">Offer</option>
      </select>

      <button onClick={() => deleteJob(job.id)}>
        Delete
      </button>
    </div>
  );
}

export default JobItem;