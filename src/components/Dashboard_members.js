import React from "react";
import { Menu, Drawer, Button } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { useState } from "react";
import { DollarOutlined } from '@ant-design/icons'

const Dashboard_members = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
      };
    
      const onClose = () => {
        setOpen(false);
      };
  return (
    <div>
        <Button className="" onClick={showDrawer}>
        Open
      </Button>
    <div className="flex gap-2">
        

      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
      <Menu className="bg-white h-screen w-52">
        Member
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Attendance</Menu.Item>
        <SubMenu title="Notification">
          <Menu.Item>Ongoing</Menu.Item>
          <Menu.Item>Upcoming</Menu.Item>
          <Menu.Item>Postpond</Menu.Item>
        </SubMenu>
        <Menu.Item>Finance</Menu.Item>
        <SubMenu title="Report">
          <Menu.Item>Attendance</Menu.Item>
          <Menu.Item>Finances</Menu.Item>
        </SubMenu>
      </Menu>
      </Drawer>
      

      <div className="bg-slate-200 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 py-2">
          <div className="bg-white rounded-md p-4 shadow-lg">
            <p>NAME: Emmanuel Oppong</p>
            <p className="">DoB: Emmanuel Oppong</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-md p-4 shadow-lg">
            <div className="side1">
              ORGANIZATION <br></br> Youth
            </div>
            <div className="side2">
              ORGANIZATION <br></br> Youth
            </div>
            <div className="side3">
              ORGANIZATION <br></br> Youth
            </div>
          </div>
          <div className="bg-white rounded-md p-4 shadow-lg">
            <p>Baptized: yes</p>
            <p>status: In CHURCH</p>
          </div>
        </div>


        <div className="grid grid-cols-3 p-2 gap-3">
            <div className="bg-white rounded-md grid md:grid-cols-2">
                <div>Giving</div>  <div className="text-9xl"><DollarOutlined /></div> 
                <p>GH 221.00</p>
            </div>
            <div className="bg-white rounded-md grid md:grid-cols-2">
                <div>Tithe</div>  <div className="text-9xl"><DollarOutlined /></div> 
                <p>GH 221.00</p>
            </div>
            <div className="bg-white rounded-md">
                <p>
                    Tithe
                </p>
                <p> GH 450.22 </p>
            </div>
            
        </div>
       
      </div>
      </div>

    </div>
  );
};

export default Dashboard_members;
