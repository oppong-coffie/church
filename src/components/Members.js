import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button } from "antd";
import { useState, useEffect } from 'react';

const Members = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const { Column } = Table;

    const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3500/users");
          setData(response.data);
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
    <div className="pt-12 bg-ywb h-screen  bg-cover bg-fixed bg-norepeat">
      <div className="p-4 w-[90%] mx-auto font-bold bg-gray-100">
         <div><Link to= {"/admin-dashboard/addmember"}>
        <Button className="bg-gradient-to-r from-yellow-100 to-yellow-600 text-green-800 font-bold">
          Add New Member
        </Button>
      </Link></div>
        <div>
      <Table dataSource={data} loading={loading}>
        <Column title="Name" dataIndex={"name"} />
        <Column title="Date_of_Birth" dataIndex={"dob"} />
        <Column title="Work" dataIndex={"occupation"} />
        <Column title="Baptized" dataIndex={"baptized"} />
      </Table>
    </div>
    </div>
    </div>
  )
}

export default Members