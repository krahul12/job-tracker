import React from "react";
import JobItem from "./JobItem";

function JobList({ jobs, deleteJob, updateStatus }) {
  if (jobs.length === 0) {
    return <p>No jobs found</p>;
  }

  return (
    <div>
      {jobs.map((job) => (
        <JobItem
          key={job.id}
          job={job}
          deleteJob={deleteJob}
          updateStatus={updateStatus}
        />
      ))}
    </div>
  );
}

export default JobList;