import React, { useState, useEffect } from "react";
import { Button, Table } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/Upcoming.css";

const Upcoming = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { Column } = Table;

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3500/upcoming");
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
    <div id="upbody" className="bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="w-[90%] m-10 font-bold bg-gray-100 p-2">
      <Link to= {"/admin-dashboard/addupcoming"}>
        <Button className="bg-gradient-to-r from-yellow-100 to-yellow-600 text-green-800 font-bold">
          Add upcoming
        </Button>
      </Link>
      <Table dataSource={data} loading={loading}>
        <Column title="Date" dataIndex={"date"} />
        <Column title="Program" dataIndex={"program"} />
        <Column title="Time" dataIndex={"time"} />
      </Table>
      </div>
    </div>
  );
};

export default Upcoming;
