import React from 'react';
import './App.css';
import Sidebar from './Navbars/Sidebar';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default App;