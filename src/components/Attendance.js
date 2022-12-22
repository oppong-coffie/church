import React from "react";
import { Table } from "antd";

const Attendance = () => {
  const { Column } = Table;

  const items = [
    {
      date: "1-12-2022",
      tithe: "12.00",
    },
    {
      date: "1-12-2022",
      tithe: "12.00",
    },
    {
      date: "1-12-2022",
      tithe: "12.00",
    },
    {
      date: "1-12-2022",
      tithe: "12.00",
    },
    {
      date: "1-12-2022",
      tithe: "12.00",
    },
  ];
  return (
    <div className="bg-yb">
        <div>
      <h1>Attendance History</h1>
      <div className="">
        <Table dataSource={items}>
          <Column title="date" dataIndex="date" />
          <Column title="Tithe" dataIndex="tithe" />
        </Table>
      </div>
      </div>
    </div>
  );
};

export default Attendance;
