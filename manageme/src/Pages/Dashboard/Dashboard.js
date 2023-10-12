import React, { useState } from "react";
import "./Dashboard.css";
import logo from "./logo.png";
import dashboardIcon from "./Icons/dashboardIcon.png";
import claimsIcon from "./Icons/claimsIcon.png";
import inventoryIcon from "./Icons/inventoryIcon.png";
import mailboxIcon from "./Icons/mailboxIcon.png";
import invoicesIcon from "./Icons/invoicesIcon.png";
import reportsIcon from "./Icons/reportsIcon.png";
import activeJobsIcon from "./Icons/activeJobsIcon.png";
import claimsSectionIcon from "./Icons/claimsSectionIcon.png";
import invoiceApprovalsIcon from "./Icons/invoiceApprovalsIcon.png";
import MyCalendar from "./MyCalendar";
import supervisedUserIcon from "./Icons/supervisedUserIcon.png";
import arrowDropDown from "./Icons/arrowDropDown.png";

const menuItems = [
  { text: "Dashboard", icon: dashboardIcon },
  { text: "Claims", icon: claimsIcon },
  { text: "Inventory", icon: inventoryIcon },
  { text: "Mailbox", icon: mailboxIcon },
  { text: "Invoices", icon: invoicesIcon },
  { text: "Reports", icon: reportsIcon },
  { text: "Calendar", icon: reportsIcon },
];

const dashboardContent = [
  { text: "Active Jobs", icon: activeJobsIcon, data: "124" },
  { text: "Claims", icon: claimsSectionIcon, data: "21" },
  { text: "Invoice Approvals", icon: invoiceApprovalsIcon, data: "43" },
];

const AccountPanelItems = ["Your Account", "Settings", "Log Out", "Support"];

// Sidebar component
function Sidebar({ isSidebarOpen, toggleSidebar }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <div
              className={
                selectedIndex === index
                  ? "menu-item menu-item-active"
                  : "menu-item"
              }
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              <div
                className="menu-icon"
                style={{ backgroundImage: `url(${item.icon})` }}
              ></div>
              <span>{item.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
          {AccountPanelItems.map((item, index) => (
            <li>
              <button key={index} className="account-panel-item">
                {item}
              </button>
            </li>
          ))}
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

  const [isAccountPanelOpen, setAccountPanelOpen] = useState(false);

  const toggleAccountPanel = () => {
    setAccountPanelOpen(!isAccountPanelOpen);
  };

  return (
    <div className="dashboard-container">
      <div className="banner">
        <div className="left-banner">
          <button
            className="invert-effect sidebar-toggle-button"
            onClick={toggleSidebar}
            style={{ backgroundImage: `url(${logo})` }}
          ></button>
          <h2>ManageMe</h2>
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

// TODO:
// 1: add objects to 'content' area
// 2: add the account icon with a dropdown that contains(account setting and logout options)
// 3: make the menu items highlight depending on which page is selected (Managing State) - DONE
// 4: add onClick for opening mailbox (route to the mailbox page)
