import React from "react";
import bigpic from "../images/bigpic.jfif";
import "../css/Finances.css";
import {
  DollarOutlined,
  GroupOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
  BarcodeOutlined,
} from "@ant-design/icons";
import { Menu, Table, Button, Divider } from "antd";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

const Finances = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img className="w-1/2 h-80" src={bigpic} alt="" />
      </div>
      <div className="flex justify-center m-auto">
        <img id="bigpic" className="" src={bigpic} alt="" />
        <p>Emmanuel Oppong Coffie</p>
      </div>

      <div className="flex justify-between">
        <div className="">
          <p className="text-3xl font-bold text-green-700">
            {" "}
            PAYMENT HISTORY
          </p>
          <p className="text-xl font-bold">
            {" "}
            Org: <span className="text-lg text-gray-500">12-02-1998</span>
          </p>
          <p className="text-xl font-bold">
            {" "}
            Baptized: <span className="text-lg text-gray-500">12-02-1998</span>
          </p>
          <p className="text-xl font-bold">
            {" "}
            Date Baptized: <span className="text-lg text-gray-500">12-02-1998</span>
          </p>
          <p className="text-xl font-bold">
            {" "}
            Date Registered: <span className="text-lg text-gray-500">12-02-1998</span>
          </p>
          <p className="text-xl font-bold">
            {" "}
            Occupation: <span className="text-lg text-gray-500">Farmer</span>
          </p>
        </div>
        <div className="">
          <div className="bg-red-400 rounded shadow-md grid grid-cols-3 p-5 m-2">
            <p className="text-gray-900">
              <p>Tithe</p>
              <p>Ghs 6666.76</p>
            </p>

            <p className="text-gray-300 text-7xl text-left">
              <DollarOutlined />
            </p>
            <p className="text-left">
              <Link to={"/admin-dashboard/modifyharvest"}>
                <Button className="bg-blue-800 text-green-200 font-semibold">
                  PAY
                </Button>
              </Link>
            </p>
          </div>
          <div className="bg-red-400 rounded shadow-md grid grid-cols-3 p-5 m-2">
            <p className="text-gray-900">
              <p>Tithe</p>
              <p>Ghs 6666.76</p>
            </p>

            <p className="text-gray-300 text-7xl text-left">
              <DollarOutlined />
            </p>
            <p className="text-left">
              <Link to={"/admin-dashboard/modifyharvest"}>
                <Button className="bg-blue-800 text-green-200 font-semibold">
                  PAY
                </Button>
              </Link>
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-red-400 rounded shadow-md grid grid-cols-3 p-3 m-2">
            <p className="text-gray-900">
              <p>Tithe</p>
              <p>Ghs 6666.76</p>
            </p>

            <p className="text-gray-300 text-7xl text-left">
              <DollarOutlined />
            </p>
            <p className="text-left">
              <Link to={"/admin-dashboard/modifyharvest"}>
                <Button className="bg-blue-800 text-green-200 font-semibold">
                  PAY
                </Button>
              </Link>
            </p>
          </div>
          <div className="bg-red-400 rounded shadow-md grid grid-cols-3 p-3 m-2">
            <p className="text-gray-900">
              <p>Tithe</p>
              <p>Ghs 6666.76</p>
            </p>

            <p className="text-gray-300 text-7xl text-left">
              <DollarOutlined />
            </p>
            <p className="text-left">
              <Link to={"/admin-dashboard/modifyharvest"}>
                <Button className="bg-blue-800 text-green-200 font-semibold">
                  PAY
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finances;
