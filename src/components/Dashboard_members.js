import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Sidebar_members";
import Dash_mem_content from "./Dash_mem_content";

import Dashboard_admin from "../components/Dashboard_admin";
import Upcomimg from "../components/Upcoming";
import Login_members from "../components/Login_members";
import Postpond from "../components/Postpond";
import Finances from "../components/Finances";
import ModifyGiving from "../components/ModifyGiving";
import Ongoing from "../components/Ongoing";
import Profile from "../components/Profile";
import Attendance from "../components/Attendance";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Editprofile from "./Editprofile";

const Dashboard_members = () => {
  return (
    <div>
      <Sidebar /> 
      
        <Routes>
          <Route path="/*" element={<Dash_mem_content />} />
          <Route path="/ongoing" element={<Ongoing />} />
          <Route path="/upcoming" element={<Upcomimg />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/postponed" element={<Postpond />} />
          <Route path="/modifygiving" element={<ModifyGiving />} />
          <Route path="/finance" element={<Finances />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/editprofile" element={<Editprofile />} />
        </Routes>
    </div>
  );
};

export default Dashboard_members;
