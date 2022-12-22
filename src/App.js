import React from "react";
import Dashboard_admin from "./components/Dashboard_admin";
import Dashboard_members from "./components/Dashboard_members";
import Login_admin from "./components/Login_admin";
import Login_members from "./components/Login_members";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login_members />}/>
        <Route path="/admin-dashboard/*" element={<Dashboard_admin />}/>
        <Route path="/member-dashboard/*" element={<Dashboard_members />}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
