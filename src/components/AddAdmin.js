import React from 'react'
import { Form, Input,Button } from 'antd'
import { useState, useEffect } from 'react';
import axios from 'axios';

const AddAdmin = () => {
    
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const postData = () => {
    axios.post("http://localhost:3500/users",{
        
        surname,
        firstname,
        mobile,
        email,
        password,

      }
      ).then(()=>{alert('succeess')})
    }
  return (
    <div className="pt-12 bg-rby h-screen  bg-cover bg-fixed bg-norepeat">
      <div className="p-4 w-[90%] mx-auto font-bold bg-gray-100">

<h1 className="bg-red-400 text-gray-500 font-semibold text-2xl">
        Administrators Form
      </h1>

        <Form hideRequiredMark layout='vertical'>
        <Form.Item name='firstname' 
        label='FIRST NAME: '
        rules={[
          {
            required: true,
            message:'name is needed',
          },
          {
            min: 3,
          },
        ]}
        >
          <Input placeholder='type your name' onChange={(e) => setFirstname(e.target.value)}/>

        </Form.Item>

        <Form.Item name='surname' 
        label='SUR NAME: '
        rules={[
          {
            required: true,
            message:'surname is needed',
          },
          {
            min: 3,
          },
        ]}
        >
          <Input placeholder='type your age' onChange={(e)=>setSurname((e.target.value))}/>
        </Form.Item>

        <Form.Item name='mobile' 
        label='MOBILE: '
        rules={[
          {
            required: true,
            message:'mobile is needed',
          },
          {
            min: 3,
          },
        ]}
        >
          <Input placeholder='type your age' onChange={(e)=>setMobile((e.target.value))}/>
        </Form.Item>

        <Form.Item name='email' 
        label='Email: '
        rules={[
          {
            required: true,
            message:'email is needed',
          },
          {
            min: 3,
          },
        ]}
        >
          <Input placeholder='type your email' onChange={(e)=>setEmail((e.target.value))}/>
        </Form.Item>

        <Form.Item name='password' 
        label='PASSWORD: '
        rules={[
          {
            required: true,
            message:'password is needed',
          },
          {
            min: 3,
          },
        ]}
        >
          <Input placeholder='type your age' onChange={(e)=>setPassword((e.target.value))}/>
        </Form.Item>

        <Form.Item>
          <Button className="bg-gradient-to-r from-yellow-100 to-yellow-600 text-green-800 font-bold" onClick={postData}>CREATE</Button>
        </Form.Item>
        
      </Form>
    </div>
    </div>
  )
}

export default AddAdmin