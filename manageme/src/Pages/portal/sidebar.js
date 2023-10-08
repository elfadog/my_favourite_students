import React, { useState, useEffect } from 'react';
import axios from 'axios'; // ensure you've installed this with npm install axios

function Sidebar({ isOpen, toggleSidebar }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        // Fetch menu items from the backend
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get('http://yourbackend.com/api/menuItems');
                setMenuItems(response.data);
            } catch (error) {
                console.error("Error fetching menu items:", error);
            }
        };

        fetchMenuItems();
    }, []); // The empty dependency array ensures this useEffect runs only once when the component mounts

    return (
        <div className={`sidebar-portal ${isOpen ? "open" : ""}`}>
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