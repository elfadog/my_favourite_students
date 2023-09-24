import React, { useState } from "react";
import Icon from "./Icon";
import logo from "./logo.png";

const Support = () => {
  const [isTileVisible, setTileVisibility] = useState(false);

  const toggleTile = () => {
    setTileVisibility(!isTileVisible);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="banner">
        <div className="left-banner">
          <button
            className="invert-effect"
            style={{ backgroundImage: `url(${logo})` }}
          ></button>
          <h2>ManageMe</h2>
        </div>
        <div className="right-banner">
          <p>account</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          position: "absolute",
          top: "50px",
          left: "30px",
        }}
      >
        <strong className="title-container">Frequently Asked Questions</strong>
        <div className="element-container" onClick={toggleTile}>
          <div className="circle"></div>
          <Icon />
        </div>
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
                support@example.com or by using our chat function on the bottom
                right.
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
          </li>
          {/* Add more FAQs and answers as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Support;
