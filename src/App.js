import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UpdateProjects from "./Admin/UpdateProjects";
import AddProjects from "./Admin/AddProjects";
import Dashboard from "./Admin/Dashboard";
import Login from "./Admin/Login";
import Home from "./Home/Home";
import Settings from "./Admin/Settings";
import AllProjects from "./Admin/AllProjects";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Auth */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addproducts" element={<AddProjects />} />
      <Route path="/updateprojects" element={<UpdateProjects />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/settings" element={<Settings />} />
      {/* Auth */}
      
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
};

export default App;
