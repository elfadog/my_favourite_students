import React, { useState } from "react";

function DropMenu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const menuItems = [
    "Dashboard",
    "Claims",
    "Inventory",
    "Mailbox",
    "Invoices",
    "Reports",
  ];

  return (
    <div className="dropdown">
      <button onClick={toggleMenu}>=</button>
      {menuVisible && (
        <ul className="dropdown-menu">
          {menuItems.map((item) => (
            <li key={item} className="blue-menu-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropMenu;