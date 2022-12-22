import React, { useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routers, Routes } from "react-router-dom";

const Login_members = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // login authentication
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.get("http://localhost:3500/users");
      const users = response.data;
      const user = users.find(
        (user) =>
          user.email === userDetails.email &&
          user.password === userDetails.password
      );
      if (user) {
        localStorage.setItem("user.id", user.id);
        navigate("/member-dashboard");
      } else {
        alert("Wrong username or password");
      }
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await axios.get("http://localhost:3500/admins");
      const users = response.data;
      const user = users.find(
        (user) =>
          user.email === userDetails.email &&
          user.password === userDetails.password
      );
      if (user) {
        navigate("/admin-dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-dove-2 bg-no-repeat bg-cover bg-fixed h-screen">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center">
        <img className=" p-4 lg:p-0 w-40 md:w-1/3" src={require("../images/pent logo.gif")} />
        <div className="lg:py-40 flex flex-col items-center justify-center lg:w-1/2">
          <div className="backdrop-blur-lg shadow-xl rounded-md p-12 bg-slate-100/20">
            <h2 className="font-bold text-white text-4xl lg:text-5xl pb-8">Member Login</h2>
        
             <Form
              hideRequiredMark
              layout="vertical"
              style={{ color: "white" }}
              className=""
            >
              <Form.Item
                label={<label className="text-white uppercase">E mail</label>}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
                style={{ color: "red" }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={<label className="text-white uppercase">password</label>}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input type="password" />
              </Form.Item>

              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox className="text-slate-900">Remember me</Checkbox>
                </Form.Item>

                <a
                  className="bg-blue-700 px-4 py-2 rounded text-white hover:bg-blue-400 hover:text-white"
                  href=""
                >
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  size="large"
                  block
                  htmlType="submit"
                  className="font-bold"
                  onClick={handleSubmit}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
            
         </div>
        </div>
      </div>
    </div>
  );
};


export default Login_members;
