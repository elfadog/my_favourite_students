<<<<<<< Updated upstream
import React, { useState } from 'react';
import JobStatus from './jobStatus';
import './portal.css';
import logo from './logo.png';

export const Portal = () => {
  return (
    <div>portal</div>
  )
};

=======
// import React, { useState } from 'react';
// import JobStatus from './jobStatus';
// import './portal.css';

// function Portal() {
//   const [jobs, setJobs] = useState([
//     { id: 1, status: 'In Progress', messages: [] },
//     { id: 2, status: 'Completed', messages: [] },
//   ]);
  
//   const sendMessage = (jobId, message) => {
//     setJobs(jobs.map(job => 
//       job.id === jobId ? { ...job, messages: [...job.messages, message] } : job
//     ));
//   };

//   // Sidebar component
// function Sidebar({ isOpen, toggleSidebar }) {
//     const [selectedIndex, setSelectedIndex] = useState(0);
  
//     return (
//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <ul>
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <div
//                 className={
//                   selectedIndex === index
//                     ? "menu-item menu-item-active"
//                     : "menu-item"
//                 }
//                 onClick={() => {
//                   setSelectedIndex(index);
//                 }}
//               >
//                 <div
//                   className="menu-icon"
//                   style={{ backgroundImage: `url(${item.icon})` }}
//                 ></div>
//                 <span>{item.text}</span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
  
//   return (
//     <div>

// <div className="banner">
//         <div className="left-banner">
//           <button
//             className="invert-effect sidebar-toggle-button"
//             onClick={toggleSidebar}
//             style={{ backgroundImage: `url(${logo})` }}
//           ></button>
//           <h2>ManageMe</h2>
//         </div>
//         <div className="right-banner">
//           <img
//             className="account-icon"
//             src={supervisedUserIcon} alt="acccountIcon"
//           ></img>
//           <p>account area</p>
//         </div>
//       </div>
//       <ul>
//         {jobs.map(job => (
//           <JobStatus key={job.id} job={job} onSendMessage={sendMessage} />
//         ))}
//       </ul>
//     </div>
//   );
// }
>>>>>>> Stashed changes

// export default Portal;
