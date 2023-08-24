import React, { useState } from "react";

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sidebar">
      <h1 className="title">Manage Me</h1>
      <button className="menu-button" onClick={toggleMenu}>
        =
      </button>
      {isMenuOpen && (
        <div className="menu">
          {
            <ul className="list-group">
              <li className="list-group-item">Dashboard</li>
              <li className="list-group-item">Claims</li>
              <li className="list-group-item">Inventory</li>
              <li className="list-group-item">Mailbox</li>
              <li className="list-group-item">Invoices</li>
              <li className="list-group-item">Reports</li>
            </ul>
          }
        </div>
      )}
    </div>
  );
}

export default Sidebar;
