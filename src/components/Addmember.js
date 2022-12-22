import React from "react";
import { Form, Input, Button } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddOngoing = () => {
  const [name, setName] = useState();
  const [dob, setDob] = useState();
  const [dateregistered, setDateregistered] = useState();
  const [baptized, setBaptized] = useState();
  const [datebaptized, setDatebaptized] = useState();
  const [occupation, setOccupation] = useState();
  const [org1, setOrg1] = useState();
  const [org2, setOrg2] = useState();
  const [org3, setOrg3] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();

  const postData = () => {
    axios
      .post("http://localhost:3500/users", {
        name,
        dob,
        mobile,
        email,
        dateregistered,
        baptized,
        datebaptized,
        occupation,
        org1,
        org2,
        org3,
        password,
      })
      .then(() => {
        alert("New member added");
      });
    axios
      .post("http://localhost:3500/membersfinances", {
        name,
        tithe: "00",
        giving: "00",
        harvest: "00",
      })
      .then(() => {
        alert("New member added");
      });
  };
  return (
    <div className="p-2 bg-bry bg-cover bg-fixed bg-norepeat">
      <div className="p-4 w-[90%] mx-auto font-bold bg-gray-100 !shadow-lg">
      <h1 className="bg-gradient-to-r from-red-400 text-gray-500 font-semibold text-2xl">
        Members Registration Form
      </h1>

      <div>
        <Form hideRequiredMark layout="vertical">
          <Form.Item
            name="name"
            label="Name: "
            rules={[
              {
                required: true,
                message: "Name is needed",
              },
            ]}
          >
            <Input
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="dob"
            label="Date of Birth: "
            rules={[
              {
                required: true,
                message: "DoB is needed",
              },
            ]}
          >
            <Input
              placeholder="type your age"
              onChange={(e) => setDob(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="mobile"
            label="Mobile: "
            rules={[
              {
                required: true,
                message: "Mobile is needed",
              },
            ]}
          >
            <Input
              placeholder="type your age"
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email: "
            rules={[
              {
                required: true,
                message: "Email is needed",
              },
            ]}
          >
            <Input
              placeholder="type your age"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="dateregistered"
            label="Date Registered: "
            rules={[
              {
                required: true,
                message: "date is needed",
              },
            ]}
          >
            <Input
              placeholder="type the registered date"
              onChange={(e) => setDateregistered(e.target.value)}
            />
          </Form.Item>
          <Form.Item name="baptized" label="Baptized? : " rules={[]}>
            <Input
              placeholder="type YES or NO"
              onChange={(e) => setBaptized(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="datebaptized"
            label="Date Baptized: "
            rules={[
              {
                required: true,
                message: "Date is needed",
              },
            ]}
          >
            <Input
              placeholder="type the date"
              onChange={(e) => setDatebaptized(e.target.value)}
            />
          </Form.Item>
          

          <Form.Item name="occupaton" label="Occupation: " rules={[]}>
            <Input
              placeholder="type the Occupation"
              onChange={(e) => setOccupation(e.target.value)}
            />
          </Form.Item>

          <Form.Item name="organization" label="Organization: " rules={[]}>
            <Input
              placeholder="type the Organization"
              onChange={(e) => setOrg1(e.target.value)}
            />
          </Form.Item>


          
          <Form.Item name="org2" label="Second Organization: " rules={[]}>
            <Input
              placeholder="OPTIONAL"
              onChange={(e) => setOrg2(e.target.value)}
            />
          </Form.Item>
          <Form.Item name="org3" label="Third Organization: " rules={[]}>
            <Input
              placeholder="OPTIONAL"
              onChange={(e) => setOrg3(e.target.value)}
            />
          </Form.Item>

          <Form.Item name="password" label="Set Password: " rules={[]}>
            <Input
              placeholder="type the password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button className="submitbutton" onClick={postData}>
              CREATE
            </Button>
          </Form.Item>
        </Form>
      </div>
      </div>
    </div>
  );
};

export default AddOngoing;
