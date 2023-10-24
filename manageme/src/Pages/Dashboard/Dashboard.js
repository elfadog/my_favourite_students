import React, { useState } from "react";
import "./Dashboard.css";
import logo from "./logo.png";
import dashboardIcon from "./Icons/dashboardIcon.png";
import claimsIcon from "./Icons/claimsIcon.png";
import inventoryIcon from "./Icons/inventoryIcon.png";
import mailboxIcon from "./Icons/mailboxIcon.png";
import invoicesIcon from "./Icons/invoicesIcon.png";
import reportsIcon from "./Icons/reportsIcon.png";
import MyCalendar from "./MyCalendar";
import supervisedUserIcon from "./Icons/supervisedUserIcon.png";
import arrowDropDown from "./Icons/arrowDropDown.png";
import EmployeeList from "./WorkHours";

const menuItems = [
  { text: "Dashboard", icon: dashboardIcon },
  { text: "Claims", icon: claimsIcon },
  { text: "Inventory", icon: inventoryIcon },
  { text: "Mailbox", icon: mailboxIcon },
  { text: "Invoices", icon: invoicesIcon },
  { text: "Reports", icon: reportsIcon },
];

// Sidebar component
function Sidebar({ isOpen, toggleSidebar }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
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

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
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
            src={supervisedUserIcon} alt="acccountIcon"
          ></img>
          <p>account area</p>
        </div>
      </div>
      <div className="main">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`content ${isSidebarOpen ? "open" : ""}`}>
        </div>
          <MyCalendar />
          <EmployeeList />
      </div>
    </div>
  );
};

export default Dashboard;
