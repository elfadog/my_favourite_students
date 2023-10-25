import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Icon from "./Icon";
import logo from "./logo.png";
import Sidebar from "../Dashboard/Sidebar";
import supervisedUserIcon from "../Dashboard/Icons/supervisedUserIcon.png";
import arrowDropDown from "../Dashboard/Icons/arrowDropDown.png";

// Account panel component
function AccountPanel({ isAccountPanelOpen, toggleAccountPanel }) {
  return (
    <div
      className={`account-panel ${
        isAccountPanelOpen ? "account-panel-open" : ""
      }`}
    >
      {
        <ul>
          <li>
            <Link to="/Dashboard" className="account-panel-item">
              Your Profile
            </Link>
          </li>
          <li>
            <Link to="/Dashboard" className="account-panel-item">
              Settings
            </Link>
          </li>
          <li>
            <Link to="/" className="account-panel-item">
              Log Out
            </Link>
          </li>
          <li>
            <Link to="/Support" className="account-panel-item">
              Support
            </Link>
          </li>
        </ul>
      }
    </div>
  );
}

const Support = () => {
  const [isTileVisible, setTileVisibility] = useState(false);

  const navigate = useNavigate();

  const toggleTile = () => {
    setTileVisibility(!isTileVisible);
  };

  const [isAccountPanelOpen, setAccountPanelOpen] = useState(false);

  const toggleAccountPanel = () => {
    setAccountPanelOpen(!isAccountPanelOpen);
  };

  return (
    <div className="dashboard-container">
      <div className="banner">
        <div className="left-banner">
          <button
            className={`invert-effect sidebar-toggle-button`}
            onClick={async () => {
              navigate("/Dashboard");
            }}
            style={{ backgroundImage: `url(${logo})` }}
          ></button>

          <button
            className="home-button"
            type="button"
            onClick={async () => {
              navigate("/Dashboard");
            }}
          >
            <h2 className="h2-dashboard">ManageMe</h2>
          </button>
        </div>
        <div className="right-banner">
          <img
            className="account-icon"
            src={supervisedUserIcon}
            alt="acccountIcon"
          ></img>
          <img
            className="arrow-drop-down-button"
            src={arrowDropDown}
            alt="arrow Drop Down Button"
            onClick={toggleAccountPanel}
          ></img>
          <AccountPanel
            isAccountPanelOpen={isAccountPanelOpen}
            toggleAccountPanel={toggleAccountPanel}
          />
        </div>
      </div>
      <div className="main-support-area-container">
        <div className="content-container">
          <strong className="title-container">
            Frequently Asked Questions
          </strong>
          {isTileVisible && (
            <div className="white-tile">
              <div className="purple-strip"></div>
              <div className="messages">
                {/* Add your chat messages here */}
                <p>Hi how can I help?</p>
                <p>I need help with this!</p>
                {/* Add more messages as needed */}
              </div>
              {/* Content of the white tile */}
            </div>
          )}
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <div className="faq-container">
                <strong>Q: How do I contact customer support?</strong>
                <p>
                  A: You can contact our customer support team by emailing
                  support@example.com or by using our chat function on the
                  bottom right.
                </p>
              </div>
            </li>
            <li>
              <div className="faq-container">
                <strong>Q: What are your business hours?</strong>
                <p>
                  A: Our business hours are from 9:00 AM to 5:00 PM, Monday
                  through Friday.
                </p>
              </div>
            </li>
            <li>
              <div className="faq-container">
                <strong>Q: Why don't I have access?</strong>
                <p>
                  A: Access will provided by the admin of your organisation.
                  Contact your admin and they should be able to guide you!
                </p>
              </div>
            </li>
            <li>
              <div className="faq-container">
                <strong>Q: What are the prices like?</strong>
                <p>
                  A: Our prices vary as it relies on multiple different factors.
                  Contact us official at "manageme@support.com" for an accurate
                  pricing.
                </p>
              </div>
            </li>
            <li>
              <div className="faq-container">
                <strong>Q: How long are the free trials</strong>
                <p>A: Free trials are typically 30 days.</p>
              </div>
            </li>
            <li>
              <div className="faq-container">
                <strong>Q: What happens after the free trial period</strong>
                <p>
                  A: You will be notified that you trial has ended and you will
                  need to make a subscription to contine using the app.
                </p>
              </div>
              <div className="faq-container">
                <strong>Q: What happens after the free trial period</strong>
                <p>
                  A: You will be notified that you trial has ended and you will
                  need to make a subscription to contine using the app.
                </p>
              </div>
            </li>
            {/* Add more FAQs and answers as needed */}
          </ul>
        </div>
        <div className="element-container" onClick={toggleTile}>
          <div className="circle"></div>
          <div className="element"></div>
          <div className="text">Need Help?</div>
        </div>
      </div>
    </div>
  );
};

export default Support;
