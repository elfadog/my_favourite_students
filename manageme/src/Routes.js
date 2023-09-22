import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Dashboard/login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Support from "./Pages/Dashboard/Support/Support";

const AppRoutes = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default AppRoutes;
