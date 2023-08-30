import React, { useState } from "react";
import App from "App.css";

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

function ListGroup() {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <h1 className="mr-2">ManageMe</h1>
          <DropMenu />
        </div>
      </nav>
    </aside>
  );
}

export default ListGroup;
