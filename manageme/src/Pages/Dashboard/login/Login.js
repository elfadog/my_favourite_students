// // Login.js
// import React from 'react';
// import './Login.css';

// function Login() {
//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>ManageMe</h2>
//         <form>
//           <div className="form-group">
//             <input type="text" id="username" name="username" placeholder="Username" />
//           </div>
//           <div className="form-group">
//             <input type="password" id="password" name="password" placeholder="Password" />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useEffect } from 'react';
import gsap from 'gsap'; // Import GSAP
import './Login.css';

function Login() {
  useEffect(() => {
    // Select the login box and SVG elements
    const loginBox = document.querySelector('.login-box');
    const svg = document.querySelector('.background-svg');

    // Hide the login box initially
    gsap.set(loginBox, { opacity: 0 });

    // Create an animation timeline
    const tl = gsap.timeline();

    // Add animations to the timeline
    tl.to(svg, { duration: 1, scale: 1.5, opacity: 0, ease: 'power1.in' })
      .to(loginBox, { duration: 1, opacity: 1, ease: 'power1.out' });

    // Play the animation timeline
    tl.play();
  }, []);

  return (
    <div className="login-container">
      <svg className="background-svg" /* SVG attributes */ />
      <div className="login-box">
        <h2>ManageMe</h2>
        <form>
          <div className="form-group">
            <input type="text" id="username" name="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
