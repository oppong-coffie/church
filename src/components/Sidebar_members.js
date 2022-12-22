import React from "react";
import { Menu, Drawer, Button } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { useState } from "react";
import pentlogo from "../images/pent logo.gif";
import { useNavigate } from "react-router-dom";

const Sidebar_members = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const menuItems = [
    {
      label: "Home",
      key: "member-dashboard",
    },
    {
      label: "Profile",
      key: "profile",
    },
    {
      label: "Attendance",
      key: "attendance",
    },
    {
      label: "Finance",
      key: "finance",
    },
    {
      label: "Events",
      key: "events",
      children: [
        {
          label: "Upcoming Events",
          key: "upcoming",

        },
        {
          label: "Ongoing Events",
          key: "ongoing",
        },
        {
          label: "Postponed Events",
          key: "postponed",
        },
      ],
    },
    {
      label: "Reports",
      key: "reports",
      children: [
        {
          label: "Attendance Report",
          key: "attendance",
        },
        {
          label: "Finance Report",
          key: "finance",
        },
      ],
    },
  ];
  return (
    <div className="bg-gray-200">
      <div className="bg-blue-600 p-2 grid grid-cols-2">
        <div>
          <Button
            className="bg-blue-500 text-gray-300 font-bold"
            onClick={showDrawer}
          >
            Menu{" "}
          </Button>
        </div>
        <div className="">
          {" "}
          <img className="w-10" src={pentlogo} alt="" />{" "}
        </div>
      </div>
      <div style={{ display: "flex", gap: "px" }}>
        <Drawer
          title="THE CHURCH OF PENTECOST"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <Menu
            className="sidemenu"
            items={menuItems}
            onClick={({key}) => {navigate(key)}}
          ></Menu>
        </Drawer>
      </div>
    </div>
  );
};

export default Sidebar_members;
