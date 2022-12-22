import React from 'react'
import { Form, Input, Checkbox, Button } from "antd";
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routers, Routes } from "react-router-dom";

const Login_admin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // login authentication
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = {
      username: username,
      password: password,
    };
      const response = await axios.get("http://localhost:3500/users");
      const users = response.data;
      const user = users.find(
        (user) =>
          user.username === userDetails.username &&
          user.password === userDetails.password
      );
      if (user) {
        navigate("/member-dashboard");
      }

    try {
      const response = await axios.get("http://localhost:3500/admins");
      const users = response.data;
      const user = users.find(
        (user) =>
          user.username === userDetails.username &&
          user.password === userDetails.password
      );
      if (user) {
        alert("You are an administrator");
        navigate("/admin-dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
       <Form
              hideRequiredMark
              layout="vertical"
              style={{ color: "white" }}
              className=""
            >
              <Form.Item
                label={<label className="text-white uppercase">Username</label>}
                onChange={(e) => setUsername(e.target.value)}
                name="username"
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
  )
}

export default Login_admin