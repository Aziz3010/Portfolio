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
  /*
  مع كل تغير في اللوكيشن يعمل فيتش و يشوف 
  هل التوكن المسجل باللوكالاستوريج
  هو نفس التوكن المسجل في الداتا بيز ولا مختلف
  لو هو هو يقبل الدخول
  لو مختلف يحوله علي الصفحة الرئيسية
  Send in header [Token + Email]



  http://myportfolioapi.rf.gd/
  */

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Auth */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addproducts" element={<AddProjects />} />
      <Route path="/updateprojects/:projectId" element={<UpdateProjects />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/settings" element={<Settings />} />
      {/* Auth */}

      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
};

export default App;
