import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UpdateProjects from "./Admin/UpdateProjects";
import AddProjects from "./Admin/AddProjects";
import Dashboard from "./Admin/Dashboard";
import Login from "./Admin/Login";
import Home from "./Home/Home";
import Settings from "./Admin/Settings";
import AllProjects from "./Admin/AllProjects";
import { ContextProvider } from "./Context/Auth";
import Logout from "./Admin/Logout";
import RequireAuth from "./Context/RequireAuth";
import SecondRequireAuth from "./Context/SecondRequireAuth";

const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SecondRequireAuth><Login /></SecondRequireAuth>} />
        {/* Auth */}
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/addproducts" element={<RequireAuth><AddProjects /></RequireAuth>} />
        <Route path="/updateprojects/:projectId" element={<RequireAuth><UpdateProjects /></RequireAuth>} />
        <Route path="/projects" element={<RequireAuth><AllProjects /></RequireAuth>} />
        <Route path="/settings" element={<RequireAuth><Settings /></RequireAuth>} />
        <Route path="/logout" element={<RequireAuth><Logout /></RequireAuth>} />
        {/* Auth */}
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </ContextProvider>
  );
};

export default App;
/*
  http://myportfolioapi.rf.gd/
*/
