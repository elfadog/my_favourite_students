import React, { useState } from "react";
import './Icon.css'; 

const Icon = props =>{
    return(
        <div style = {{position: 'fixed', bottom: '30px', right: '30px'}}>
            <div>Need Help?</div>
            <div className="element-container">
            <div className="circle"></div>
            <div className="element"></div>
        </div>
    </div>
    );
}

export default Icon