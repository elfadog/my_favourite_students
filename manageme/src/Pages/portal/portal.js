import React, { useState } from 'react';
import JobStatus from './jobStatus';
import './portal.css';

function Portal() {
  const [jobs, setJobs] = useState([
    { id: 1, status: 'In Progress', messages: [] },
    { id: 2, status: 'Completed', messages: [] },
  ]);
  
  const sendMessage = (jobId, message) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, messages: [...job.messages, message] } : job
    ));
  };
  
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {jobs.map(job => (
          <JobStatus key={job.id} job={job} onSendMessage={sendMessage} />
        ))}
      </ul>
    </div>
  );
}

export default Portal;
