import React from "react";
// import gsap from 'gsap'; // Import GSAP
import ListGroup from "./ListGroup";
import "./Dashboard.css";
import DropMenu from "./DropMenu";

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
        <ListGroup />
        <p>account</p>
      </div>
      <div className="main">
        <p>main content</p>
      </div>
    </div>
  );
}

export default Dashboard;
