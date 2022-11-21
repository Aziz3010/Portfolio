import React from "react";
import Login from "./Admin/Login";
import Home from "./Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import AddProjects from "./Admin/AddProjects";
import UpdateProjects from "./Admin/UpdateProjects";
import Dashboard from "./Admin/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Auth */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addproducts" element={<AddProjects />} />
      <Route path="/updateprojects" element={<UpdateProjects />} />
      {/* Auth */}
      
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
};

export default App;
