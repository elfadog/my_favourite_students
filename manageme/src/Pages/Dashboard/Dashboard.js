import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Dashboard.css";
import logo from "./logo.png";
import Sidebar from "./Sidebar";
import activeJobsIcon from "./Icons/activeJobsIcon.png";
import claimsSectionIcon from "./Icons/claimsSectionIcon.png";
import invoiceApprovalsIcon from "./Icons/invoiceApprovalsIcon.png";
import calendarIcon from "./Icons/calendarIcon.png";
import MyCalendar from "./MyCalendar";
import supervisedUserIcon from "./Icons/supervisedUserIcon.png";
import arrowDropDown from "./Icons/arrowDropDown.png";

const dashboardContent = [
  { text: "Active Jobs", icon: activeJobsIcon, data: "124" },
  { text: "Claims", icon: claimsSectionIcon, data: "21" },
  { text: "Invoice Approvals", icon: invoiceApprovalsIcon, data: "43" },
];

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

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate();

  const handleMenuClick = async () => {
    navigate("/Dashboard");
  };

  const [isAccountPanelOpen, setAccountPanelOpen] = useState(false);

  const toggleAccountPanel = () => {
    setAccountPanelOpen(!isAccountPanelOpen);
  };

  return (
    <div className="dashboard-container">
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
            <h2>ManageMe</h2>
          </button>
        </div>
        <div className="right-banner">
          <img
            className="account-icon"
            src={supervisedUserIcon}
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
      <div className="main">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`content ${isSidebarOpen ? "sidebar-open" : ""}`}>
          {dashboardContent.map((item, index) => (
            <div key={index} className="section">
              <img className="section-icon" src={item.icon} alt=""></img>
              <div className="section-content">
                <div className="section-title">{item.text}</div>
                <div className="section-data">{item.data}</div>
              </div>
            </div>
          ))}
          {/* Calendar stuff
        <div className="calendar-section">
          <p>MyCalendar</p>
          <MyCalendar />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
