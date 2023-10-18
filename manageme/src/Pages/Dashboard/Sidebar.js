import React, { useState } from "react";
import "./Dashboard.css";
import dashboardIcon from "./Icons/dashboardIcon.png";
import claimsIcon from "./Icons/claimsIcon.png";
import inventoryIcon from "./Icons/inventoryIcon.png";
import mailboxIcon from "./Icons/mailboxIcon.png";
import invoicesIcon from "./Icons/invoicesIcon.png";
import reportsIcon from "./Icons/reportsIcon.png";

const menuItems = [
  { text: "Dashboard", icon: dashboardIcon },
  { text: "Claims", icon: claimsIcon },
  { text: "Inventory", icon: inventoryIcon },
  { text: "Mailbox", icon: mailboxIcon },
  { text: "Invoices", icon: invoicesIcon },
  { text: "Reports", icon: reportsIcon },
  { text: "Calendar", icon: reportsIcon },
];

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

export default Sidebar;
