import React, { useState } from "react";
import "./Icon.css";

const Icon = (props) => {
  return (
    <div style={{ position: "fixed", bottom: "30px", right: "30px" }}>
      <div className="element-container">
        <div className="circle"></div>
        <div className="element"></div>
        <div className="text">Need Help?</div>
      </div>
    </div>
  );
};

export default Icon;
