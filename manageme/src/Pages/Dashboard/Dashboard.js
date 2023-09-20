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
  //   useEffect(() => {
  //     // Select the login box and SVG elements
  //     const loginBox = document.querySelector('.login-box');
  //     const svg = document.querySelector('.background-svg');

  //     // Hide the login box initially
  //     gsap.set(loginBox, { opacity: 0 });

  //     // Create an animation timeline
  //     const tl = gsap.timeline();

  //     // Add animations to the timeline
  //     tl.to(svg, { duration: 0.5, scale: 1.5, opacity: 0, ease: 'power1.in' })
  //       .to(loginBox, { duration: 1, opacity: 1, ease: 'power1.out' });

  //     // Play the animation timeline
  //     tl.play();
  //   }, []);

  return (
    <div className="dashboard-container">
      <div className="banner">
        <h2>ManageMe</h2>
        <p>account</p>
      </div>
      <ListGroup />
      <div className="main">
        <p>main content</p>
      </div>
    </div>
  );
}

export default Dashboard;
