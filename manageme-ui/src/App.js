// import React from 'react';
// import './App.css';
// import Sidebar from './Navbars/Sidebar';

// const App = () => {
//   return (
//     <div className="app">
//       <Sidebar />
//       <main className="main-content">
//         {/* Your main content goes here */}
//       </main>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Home from './Pages/home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element ={<Home/>}/> 
        <Route path="/home" element>
          <Home />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;