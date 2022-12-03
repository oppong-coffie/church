import React from 'react'
import { Menu, Drawer, Button } from 'antd'
import SubMenu from 'antd/es/menu/SubMenu'
import { useState } from 'react'



const Dashboard_admin = () => {
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
    <div style={{display: 'flex', gap: 'px'}}>
    <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
     <Menu className='sidemenu'>
        <Menu.Item>
            Profile
        </Menu.Item>
        <Menu.Item>
            Attendance
        </Menu.Item>
        <SubMenu title="Notification">
              <Menu.Item>
                  Ongoing
              </Menu.Item>
              <Menu.Item>
                  Upcoming
              </Menu.Item>
              <Menu.Item>
                  Postpond
              </Menu.Item>
            </SubMenu>
        <Menu.Item>
            Finance
        </Menu.Item>
          <SubMenu title="Report">
              <Menu.Item>
                  Attendance
              </Menu.Item>
              <Menu.Item>
                  Finances
              </Menu.Item>
            </SubMenu>

     </Menu>
     </Drawer>
     </div>

     

     <div className="mainspace">
      <h1 className="text-blue-400 font-extrabold">MAIN SPACE</h1>

      <div className='grid sm:grid-cols-3'>
        <div>ghgggg</div>
        <div>ghgggg</div>
        <div>ghgggg</div>
      </div>
     </div>
      
    </div>
  )
}

export default Dashboard_admin
