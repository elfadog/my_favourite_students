import React, { useState } from "react";
import "./Dashboard.css";

// Sidebar component
function Sidebar({ isOpen, toggleSidebar }) {
  const menuItems = ["Dashboard", "Claims", "Inventory", "Mailbox", "Invoices", "Reports"];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
        <div className="banner">
          <div className="left-banner">
            <button onClick={toggleSidebar}></button>
            <h2>ManageMe</h2>
          </div>
          <div className="right-banner">
            <p>account</p>
          </div>
        </div>
        <div className="main">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="content">
            <p>content</p>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
