import React, { useEffect } from "react";
import { Menu, Drawer, Button, Switch } from "antd";
import { Link } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";
import { useState } from "react";
import { DollarOutlined } from "@ant-design/icons";
import Sidebar from "./Sidebar_members";
import axios from "axios";

const Dash_mem_content = () => {
  const [data, setData] = useState([]);
  const [fdata, setfData] = useState([]);

  //fetch id from local storage
  const id = localStorage.getItem("user.id");

  //fetch data from json server
  const FetchData = async () => {
    const response = await axios.get(`http://localhost:3500/users/${id}`);
    setData(response.data);
    const res = await axios.get(`http://localhost:3500/membersfinances/${id}`);
    setfData(res.data);
  };
  useEffect(() => {
    FetchData();
  }, []);


   


  return (
    <div>
      <div className="bg-slate-200 dark:bg-slate-900 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 py-2">
          <div className="bg-red-200 dark:bg-slate-800 dark:text-slate-100 rounded-md p-4 shadow-lg">
            <p>NAME: {data.surname} {data.firstname}</p>
            <p className="">DoB: {data.dob}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 bg-green-300 dark:bg-slate-800 dark:text-slate-100 rounded-md p-4 shadow-lg">
            <div className="side1">
              ORGANIZATION <br></br> {data.org1}
            </div>
            <div className="side2">
               <br></br> {data.org2}
            </div>
            <div className="side3">
               <br></br> {data.org3}
            </div>
          </div>
          <div className="bg-gray-400 dark:bg-slate-800 dark:text-slate-100 rounded-md p-4 shadow-lg">
            <p>Baptized: {data.baptized}</p>
            <p>status: {data.status}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 p-2 gap-3">
          <div className="bg-blue-500 rounded-md grid md:grid-cols-2">
            <div>Giving</div>{" "}
            <div className="text-9xl">
              <DollarOutlined />
            </div>
            <p>{fdata.giving}</p>
          </div>
          <div className="bg-purple-300 rounded-md grid md:grid-cols-2">
            <div>Tithe</div>{" "}
            <div className="text-9xl">
              <DollarOutlined />
            </div>
            <p>{fdata.tithe}</p>
          </div>
          <div className="bg-purple-700 rounded-md grid md:grid-cols-2">
            <div>Harvest</div>{" "}
            <div className="text-9xl">
              <DollarOutlined />
            </div>
            <p>{fdata.harvest}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dash_mem_content;
