import React from "react";
import { Menu, Drawer, Button, Divider } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { useState } from "react";
import pentlogo from "../images/pent logo.gif";
import { DollarOutlined } from "@ant-design/icons";
import Sidebar_admin from "./Sidebar_admin";
import Admin_content from "./Admin_content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upcoming from "./Upcoming";
import Postpond from "./Postpond";
import Ongoing from "./Ongoing";
import ModifyGiving from "./ModifyGiving";
import AddAdmin from "./AddAdmin";
import AddUser from "./AddUser";
import AddUpcoming from "./AddUpcoming";
import AddPostponed from "./AddPostponed";
import AddOngoing from "./AddOngoing";
import Members from "./Members";
import Addmember from "./Addmember";
import ModifyTithe from "./ModifyTithe";
import ModifyHarvest from "./ModifyHarvest";
import Expenses from "./Expenses";
import Donations from "./Donations";
import Profile from "./Profile";
import Collection from "./Collection";

const Dashboard_admin = () => {
  return (
    <div>
      <Sidebar_admin />
      
      <Routes>
        <Route exact path="/*" element={<Admin_content />} />
        <Route path="/ongoing" element={<Ongoing />} />
          <Route path="/upcoming/*" element={<Upcoming />} />
          <Route path="/postponed" element={<Postpond />} />
          <Route path="/modifygiving" element={<ModifyGiving />} />
          <Route path="/modifytithe" element={<ModifyTithe />} />
          <Route path="/modifyharvest" element={<ModifyHarvest />} />
          <Route path="/addadmin" element={<AddAdmin />} />
          <Route path="/addupcoming" element={<AddUpcoming />} />
          <Route path="/addpostponed" element={<AddPostponed />} />
          <Route path="/addongoing" element={<AddOngoing />} />
          <Route path="/members/*" element={<Members />} />
          <Route path="/addmember" element={<Addmember />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/collection" element={<Collection />} />
      </Routes>
    </div>
  );
};

export default Dashboard_admin;
