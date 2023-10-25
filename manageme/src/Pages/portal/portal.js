import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import JobStatus from "./jobStatus";
import Sidebar from "./sidebar";
import "./portal.css";
import accountIcon from "./Icons/supervisedUserIcon.png";
import arrowDropDown from "./Icons/arrowDropDown.png";
import logo from "./Icons/logo.png";

// Account panel component
function AccountPanel({ isAccountPanelOpen, toggleAccountPanel }) {
  return (
    <div
      className={`account-panel ${
        isAccountPanelOpen ? "account-panel-open" : ""
      }`}
    >
      {
        <ul>
          <li>
            <Link to="/Dashboard" className="account-panel-item">
              Your Profile
            </Link>
          </li>
          <li>
            <Link to="/Dashboard" className="account-panel-item">
              Settings
            </Link>
          </li>
          <li>
            <Link to="/" className="account-panel-item">
              Log Out
            </Link>
          </li>
          <li>
            <Link to="/Support" className="account-panel-item">
              Support
            </Link>
          </li>
        </ul>
      }
    </div>
  );
}

function Portal() {
  const [jobs, setJobs] = useState([
    { id: 1, status: "In Progress", messages: [] },
    { id: 2, status: "Completed", messages: [] },
  ]);

  const sendMessage = (jobId, message) => {
    setJobs(
      jobs.map((job) =>
        job.id === jobId
          ? { ...job, messages: [...job.messages, message] }
          : job
      )
    );
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate();

  const [isAccountPanelOpen, setAccountPanelOpen] = useState(false);

  const toggleAccountPanel = () => {
    setAccountPanelOpen(!isAccountPanelOpen);
  };

  return (
    <div className="dashboard-container-portal">
      <div className="banner">
        <div className="left-banner">
          <button
            className={`invert-effect sidebar-toggle-button ${
              isSidebarOpen ? "sidebar-open" : ""
            }`}
            onClick={toggleSidebar}
            style={{ backgroundImage: `url(${logo})` }}
          ></button>
          <button
            className="home-button"
            type="button"
            onClick={async () => {
              navigate("/Dashboard");
            }}
          >
            <h2 className="h2-dashboard">ManageMe</h2>
          </button>
        </div>
        <div className="right-banner">
          <img
            className="account-icon"
            src={accountIcon}
            alt="acccountIcon"
          ></img>
          <img
            className="arrow-drop-down-button"
            src={arrowDropDown}
            alt="arrow Drop Down Button"
            onClick={toggleAccountPanel}
          ></img>
          <AccountPanel
            isAccountPanelOpen={isAccountPanelOpen}
            toggleAccountPanel={toggleAccountPanel}
          />
        </div>
      </div>
      <div className="main-sidebar-jobs">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        />
        <div
          className={`job-list-container ${
            isSidebarOpen ? "sidebar-open" : ""
          }`}
        >
          {jobs.map((job) => (
            <JobStatus key={job.id} job={job} onSendMessage={sendMessage} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portal;
