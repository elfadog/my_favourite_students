import React, { useState, useEffect } from "react";
import axios from "axios"; // ensure you've installed this with npm install axios

function Sidebar({ isOpen, toggleSidebar }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu items from the backend
    const fetchMenuItems = async (req, res) => {
      try {
        const response = await axios.get("http://localhost:3001/api/jobs");
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    };

    fetchMenuItems();
  }, []); // The empty dependency array ensures this useEffect runs only once when the component mounts

  console.log(menuItems);

  return (
    <div className={`sidebar-portal ${isOpen ? "open" : ""}`}>
      {menuItems.length > 0 ? (
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <div
                className={
                  selectedIndex === index
                    ? "menu-item-portal menu-item-active"
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
                <span>
                  {
                    item.invoiceNo /* or any other property you have in your documents */
                  }
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Pending Jobs</p>
      )}
    </div>
  );
}

export default Sidebar;
