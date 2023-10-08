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

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar component
  // function Sidebar({ isOpen, toggleSidebar }) {
  //   const [selectedIndex, setSelectedIndex] = useState(0);
  
  //   return (
  //     <div className={`sidebar-portal ${isOpen ? "open" : ""}`}>
  //       <ul>
  //         {menuItems.map((item, index) => (
  //           <li key={index}>
  //             <div
  //               className={
  //                 selectedIndex === index
  //                   ? "menu-item menu-item-active"
  //                   : "menu-item"
  //               }
  //               onClick={() => {
  //                 setSelectedIndex(index);
  //               }}
  //             >
  //               <div
  //                 className="menu-icon"
  //                 style={{ backgroundImage: `url(/* link your icon image here */)`, }}
  //               ></div>
  //               <span>{item.text}</span>
  //             </div>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
  
  return (
    <div className="dashboard-container-portal">
      <div className="banner-portal">
        <div className="left-banner">
          <button
            className="invert-effect-portal sidebar-toggle-button"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            style={{ backgroundImage: `url(/* link your logo image here */)` }}
          ></button>
          <h2>ManageMe</h2>
        </div>
        <div className="right-banner">
          <img
            className="account-icon"
            // src={/* link your account icon image here */} 
            alt="accountIcon"
          ></img>
          <p>account area</p>
        </div>
      </div>
      <ul>
        {jobs.map(job => (
          <JobStatus key={job.id} job={job} onSendMessage={sendMessage} />
        ))}
      </ul>
    </div>
  );
}

export default Portal;
