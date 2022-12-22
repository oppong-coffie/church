import React from "react";
import { useState, useEffect } from "react";
import { DollarOutlined, GroupOutlined, UsergroupAddOutlined, SolutionOutlined, BarcodeOutlined } from "@ant-design/icons";
import { Menu, Table, Button, Divider } from "antd";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import ModifyGiving from "./ModifyGiving";

const Admin_content = () => {
  const [data, setData] = useState();
  const [othersdata, setOthersData] = useState();
  const [leadersdata, setLeadersData] = useState();
  const [loading, setLoading] = useState();
  const [orgData, setOrgData] = useState();
  const { Column } = Table;
  const len = (''); 
  const fetchData = async () => {
   
    try {
      const response = await axios.get("http://localhost:3500/finances");
      setData(response.data);

      const res = await axios.get("http://localhost:3500/others");
      setOthersData(res.data);
     

      const responses = await axios.get("http://localhost:3500/organizations");
      setOrgData(responses.data);
    } catch (error) {
      console.log(error); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-gray-200">
        <h1 className="px-5 text-blue-400 font-extrabold">
          THE CHURCH OF PENTECOST
        </h1>

        <div className="grid sm:grid-cols-3 gap-10 p-3">
          <div className="bg-green-400 rounded shadow-md grid grid-cols-2">
            <p className="bg-green-400 text-2xl">
              <p className="text-gray-400 px-9" dataIndex={"giving"}>
                <Table className="bg-green-400 " pagination={false} dataSource={data} loading={loading}>
                  <Column className="bg-green-400" title=" Giving" dataIndex={"giving"} />
                </Table>
                <Link to={"/admin-dashboard/modifygiving"}>
                  <Button className="bg-blue-800 text-green-200 font-semibold">
                    modify
                  </Button>
                </Link>
              </p>
            </p>
            <h2 className="text-gray-300 text-9xl text-left">
              <DollarOutlined />
            </h2>
          </div>

          <div className="bg-blue-400 rounded shadow-md grid grid-cols-2">
            <p className="text-2xl">
              <p
                className="text-gray-400 px-9"
                dataSource={data}
                dataIndex={"giving"}
              >
                <Table  className="bg-green-400" pagination={false} dataSource={data} loading={loading}>
                  <Column className="bg-blue-400" title="Tithes" dataIndex={"tithes"} />
                </Table>
                <Link to={"/admin-dashboard/modifytithe"}>
                  <Button className="bg-blue-800 text-green-200 font-semibold">
                    modify
                  </Button>
                </Link>
              </p>
            </p>
            <h2 className="text-gray-300 text-9xl text-left">
              <DollarOutlined />
            </h2>
          </div>

          <div className="bg-red-400 rounded shadow-md grid grid-cols-2">
            <p className="text-2xl">
              <p className="text-gray-400 px-9">
                <Table pagination={false} dataSource={data} loading={loading}>
                  <Column className="bg-red-400" title="Harvest" dataIndex={"harvest"} />
                </Table>
                <Link to={"/admin-dashboard/modifyharvest"}>
                  <Button className="bg-blue-800 text-green-200 font-semibold">
                    modify
                  </Button>
                </Link>
              </p>
            </p>
            <h2 className="text-gray-300 text-9xl text-left">
              <DollarOutlined />
            </h2>
          </div>
        </div>


        <Divider />

        <div className="grid sm:grid-cols-3 gap-10 p-3">
        <div className="md:h-1/2 bg-yellow-300 rounded shadow-md grid grid-cols-2">
            <p className="text-2xl">
              <p className="text-gray-400 px-9">
                <Table pagination={false} dataSource={data} loading={loading}>
                  <Column className="bg-yellow-300" title="Members" dataIndex={"harvest"} />
                </Table>
                <Link to={"/admin-dashboard/addmember"}>
                  <Button className="bg-blue-800 text-green-200 font-semibold">
                    Add New Member
                  </Button>
                </Link>
              </p>
            </p>
            <h2 className="text-gray-400 text-9xl text-center">
              <UsergroupAddOutlined />
            </h2>
          </div>

          <div className="md:h-1/2 bg-gray-300 rounded shadow-md grid grid-cols-2">
            <p className="text-2xl">
              <p className="text-gray-400 px-9">
                <Table pagination={false} dataSource={data} loading={loading}>
                  <Column className="bg-gray-300" title="Assets" dataIndex={"harvest"} />
                </Table>
                <Link to={"/admin-dashboard/modifyharvest"}>
                  <Button className="bg-blue-800 text-green-200 font-semibold">
                    Add Asset
                  </Button>
                </Link>
              </p>
            </p>
            <h2 className="text-gray-700 text-9xl text-left">
              <BarcodeOutlined />
            </h2>
          </div>



          <div className="bg-white  shadow-md grid grid-cols-2">
            <div className="bg-red-200">
              <Table
                pagination={false}
                dataSource={orgData}
                loading={loading}
              >
                <Column title="Organizations" dataIndex={"name"} />
              </Table>
            </div>
            <div className="text-gray-600 text-9xl text-left bg-gray-400">
              <SolutionOutlined />
            </div>
          </div>

          {/* <div className="">
            <Link to={"/admin-dashboard/collection"}>
            <Button  className="bg-gradient-to-b from-yellow-400 to-yellow-700 text-green-900 font-bold">Collections</Button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Admin_content;
