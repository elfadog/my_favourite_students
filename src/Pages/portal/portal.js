import React, { useState } from 'react';
import JobStatus from './jobStatus';
import Sidebar from './sidebar';
import './portal.css';
import accountIcon from './Icons/supervisedUserIcon.png';
import logo from './Icons/logo.png';

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

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
<div className="dashboard-container-portal">
  <div className="banner-portal">
        <div className="left-banner">
        <button className={`invert-effect-portal sidebar-toggle-button ${isSidebarOpen ? 'rotated' : ''}`}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          style={{ backgroundImage: `url(${logo})` }}> 
          </button>
          <h2>ManageMe</h2>
        </div>
        <div className="portal-right-banner">
          <button className="profile-button">
            <p>Profile</p>
          </button>

          {/* <img
            className="account-icon"
            src={accountIcon} alt="accountIcon" 
          ></img>
          <p>Profile</p> */}
        </div>
    </div>
    <div className='main-sidebar-jobs'>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      <div className="job-list-container">
      {jobs.map(job => (
        <JobStatus key={job.id} job={job} onSendMessage={sendMessage} />
      ))}
    </div>
  </div>
</div>

  );
}

export default Portal;
