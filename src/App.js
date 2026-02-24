import React, { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // Load from localStorage
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs"));
    if (storedJobs) {
      setJobs(storedJobs);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // Add Job
  const addJob = (newJob) => {
    const isDuplicate = jobs.some(
      (job) =>
        job.company.toLowerCase() === newJob.company.toLowerCase() &&
        job.role.toLowerCase() === newJob.role.toLowerCase()
    );

    if (isDuplicate) {
      alert("This job already exists!");
      return;
    }

    setJobs([...jobs, { ...newJob, id: Date.now() }]);
  };

  // Delete Job
  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  // Update Status
  const updateStatus = (id, newStatus) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, status: newStatus } : job
    );
    setJobs(updatedJobs);
  };

  // Filter + Search Logic
  const filteredJobs = jobs
    .filter((job) =>
      filter === "All" ? true : job.status === filter
    )
    .filter((job) =>
      job.company.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="container">
      <h1>Job Tracker</h1>

      <JobForm addJob={addJob} />
      <Filter setFilter={setFilter} setSearch={setSearch} />

      <JobList
        jobs={filteredJobs}
        deleteJob={deleteJob}
        updateStatus={updateStatus}
      />
    </div>
  );
}

export default App;