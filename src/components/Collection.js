import React from "react";
import { Form, Input, Button } from "antd";
import FormItem from "antd/es/form/FormItem";
import axios from "axios";
import { useState, useEffect } from "react";
import userEvent from "@testing-library/user-event";

const Collection = () => {
  const [giving, setGiving] = useState();
  const [id, setId] = useState();
  const [surname, setSurname] = useState();
  const [firstname, setFirstname] = useState();
  const [dob, setdob] = useState();
  const [org1, setOrg1] = useState();
  const [org2, setOrg2] = useState();
  const [org3, setOrg3] = useState();
  const [tithe, setTithe] = useState();
  const [presentstatus, setPresentstatus] = useState();
  const [baptized, setBaptized] = useState();
  const [datebaptized, setDatebaptized] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState([]);

  const FetchData = async () => {
   
  };
  useEffect(() => {
    FetchData();
  }, []);

  const postData = async () => {
    const response = await axios.get(`http://localhost:3500/users/${id}`);
    setData(response.data);
    const user = await axios.get(`http://localhost:3500/users/${id}`);
    setData(user.data);

    await axios.put(`http://localhost:3500/users/${id}`, {
      surname: data.surname,
      firstname,
      dob,
      org1,
      org2,
      org3,
      giving,
      tithe,
      presentstatus,
      baptized,
      datebaptized,
      mobile,
      email,
      password,
    });
    alert("Amount updated");
  };

  return (
    <div>
      <h1 className="text-3xl">Modify Giving</h1>

      <Form>
        <Form.Item name="id" label="id: ">
          <Input
            placeholder={data.surname}
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Item>

        <Form.Item name="surname" label="Surname: ">
          <Input
            placeholder={data.surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Item>

        <Form.Item name="firstname" label="first Name: ">
          <Input
            placeholder={data.firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Item>

        <Form.Item name="dob" label="Date of Birth: ">
          <Input
            placeholder={data.dob}
            onChange={(e) => setdob(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="org1" label="ORG1: ">
          <Input
            placeholder={data.org1}
            onChange={(e) => setOrg1(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="org2" label="ORG2: ">
          <Input
            placeholder={data.org2}
            onChange={(e) => setOrg2(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="org3" label="org3: ">
          <Input
            placeholder={data.org3}
            onChange={(e) => setOrg3(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="giving" label="giving: ">
          <Input
            placeholder={data.giving}
            onChange={(e) => setGiving(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="tithe" label="tithe: ">
          <Input
            placeholder={data.tithe}
            onChange={(e) => setTithe(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="presentstatus" label="Present status: ">
          <Input
            placeholder={data.presentstatus}
            onChange={(e) => setPresentstatus(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="baptized" label="baptized: ">
          <Input
            placeholder={data.baptized}
            onChange={(e) => setBaptized(e.target.value)}
          />
        </Form.Item>

        <Form.Item name="datebaptized" label="datebaptized: ">
          <Input
            placeholder={data.datebaptized}
            onChange={(e) => setDatebaptized(e.target.value)}
          />
        </Form.Item>

        <Form.Item name="mobile" label="MOBILE: ">
          <Input
            placeholder={data.mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="email" label="email: ">
          <Input
            placeholder={data.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button className="submitbutton" onClick={postData}>
            Modify
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Collection;
