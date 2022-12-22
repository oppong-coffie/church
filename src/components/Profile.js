import React from "react";
import profilepic from "../images/bigpic.jfif";
import "../css/Profile.css";
import { Divider, Button } from "antd";
import { useState, useEffect, } from "react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { Link } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState([]);

  // get the id from the local storage
  const id = localStorage.getItem("user.id");
  console.log(id);

  // fetch the profile data from the server
  const FetchProfile = async () => {
    const res = await axios.get(`http://localhost:3500/users/${id}`); 
    setData(res.data);
    console.log(data);
  };
    useEffect(() => {
      FetchProfile();
    }, []);

  return (
    <div className="flex justify-center bg-yb h-screen">
      <div className="bg-gradient-to-r from-blue-300 to-yellow-200 w-10/12 auto">
        <p>. . .</p>
        <img id="profilepic" className="" src={profilepic} alt="" />
        <Divider />

        <div className="flex justify-center shadow-2xl">
          <div>
            <p className="text-xl font-bold">
              {" "}
              <span className="text-lg text-gray-500">
              {data.surname} {data.firstname
              }
              </span>
            </p>
            <Divider />
            <p className="text-xl font-bold">
              {" "}
              DoB: <span className="text-lg text-gray-500">{data.dob}</span>
            </p>
            <p className="text-xl font-bold">
              {" "}
              Org: <br />
              <span className="text-lg text-gray-500">{data.org1}</span>
              <br />
              <span className="text-lg text-gray-500">{data.org2}</span>
              <br />
              <span className="text-lg text-gray-500">{data.org3}</span> <br />
              <span className="text-lg text-gray-500">{data.org1}</span>
              <br />
            </p>
            <p className="text-xl font-bold">
              {" "}
              Baptized:{" "}
              <span className="text-lg text-gray-500">{data.baptized}</span>
            </p>
            <p className="text-xl font-bold">
              {" "}
              Date Baptized:{" "}
              <span className="text-lg text-gray-500">{data.datebaptized}</span>
            </p>
            <p className="text-xl font-bold">
              {" "}
              Date Registered:{" "}
              <span className="text-lg text-gray-500">12-02-1998</span>
            </p>
            <p className="text-xl font-bold">
              {" "}
              Occupation: <span className="text-lg text-gray-500">Farmer</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center ">
        <Link to= {"/member-dashboard/editprofile"}>
        <Button className="bg-gradient-to-t from-yellow-100 to-green-600 text-green-800 font-bold">
          Edit
        </Button>
      </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Profile;
