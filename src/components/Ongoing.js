import React, { useState, useEffect } from "react";
import { Table, Button, Divider } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const Ongoing = () => {
  const [data, setData] = useState([]);
  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Column } = Table;

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3500/programlist");
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
    <div className="pt-12 bg-byw h-screen  bg-cover bg-fixed bg-norepeat">
      <div className="p-4 w-[90%] mx-auto font-bold bg-gray-100">
        <div className="">
                  <Link to={"/admin-dashboard/addongoing"}>
          <Button className="bg-gradient-to-r from-yellow-100 to-yellow-600 text-green-800 font-bold">Update Ongoing</Button>
        </Link>
      </div>

      {data.map((item) => {
        return (
          <div key={item.id}>
            <h1>
              <span>Preacher: </span>
              {item.preacher}
            </h1>
            <h1>
              <span>Main Verse: </span>
              {item.verse}
            </h1>
            <h1>
              <span>Topic </span>
              {item.topic}
            </h1>
            <h1>
              <span>MC: </span>
              {item.mc}
            </h1>
            <Divider />
            <p className="text-red-600 bg-gradient-to-r from-blue-500 to-blue-100">Program List</p>
            <div className="text-gray-900 bg-gradient-to-r from-blue-400">
            <h1>{item.list1}</h1>
            <h1>{item.list2}</h1>
            <h1>{item.list3}</h1>
            <h1>{item.list4}</h1>
            <h1>{item.list5}</h1>
          </div>
          </div>
        );
      })}
       <Divider />
      <Button danger className="bg-red-900">COMPLETED</Button>
    </div>
    </div>
  );
};

export default Ongoing;
