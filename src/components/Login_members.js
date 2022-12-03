import React from 'react'
import { Form, Input, Checkbox, Button, } from 'antd';
import dove from './dove.jpg';


const Login_members = () => {
  return (
    <div className='mainbody'>
        <img src="dove" alt="" />

        <div className="wrapper">
        <img className='nyamekye' src={require('../images/pent logo.gif')} />
            <Form 
            hideRequiredMark
            layout="vertical"
            style={{ color: "white" }}
            >
                <Form.Item
                    label={<label style={{ color: "white" }}>Username</label>}
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    style={{ color: "red" }}
                >
                    <Input />
                </Form.Item>

                <Form.Item
        label={<label style={{ color: "white" }}>password</label>}
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>


      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        </Form.Item>
                
            </Form>

        </div>
      
    </div>
  )
}

export default Login_members
