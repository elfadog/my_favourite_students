import React from "react";
// import gsap from 'gsap'; // Import GSAP
import "./Dashboard.css";

function Dashboard() {
  const menuItems = [
    "Dashboard",
    "Claims",
    "Inventory",
    "Mailbox",
    "Invoices",
    "Reports",
  ];

  return (
    <div className="dashboard-container">
      <div className="banner">
        <h2>ManageMe</h2>
        <p>account</p>
      </div>
      <div className="main">
        <p>main content</p>
      </div>
    </div>
  );
}

export default Dashboard;
