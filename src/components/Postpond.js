import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";


const Postpond = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { Column } = Table;
  const { Row } = Table;

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3500/postponed");
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
    <div className="pt-12 bg-yb h-screen  bg-cover bg-fixed bg-norepeat">
      <div className="p-4 w-[90%] mx-auto font-bold bg-gray-100">
    <div><Link to= {"/admin-dashboard/addpostponed"}>
        <Button className="bg-gradient-to-r from-yellow-100 to-yellow-600 text-green-800 font-bold">
          Add Postponed
        </Button>
      </Link></div>
    
    <div>
      <Table dataSource={data} loading={loading}>
        <Column title="Date" dataIndex={"date"} />
        <Column title="Program" dataIndex={"program"} />
        <Column title="Time" dataIndex={"time"} />
      </Table>
    </div>
    </div>
    </div>
  );
};

export default Postpond;
