import React from 'react'
import { Form, Input,Button } from 'antd'
import { useState, useEffect } from 'react';
import axios from 'axios';

const AddUser = () => {
    
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
    <div>
        <p className='bg-blue-400 text-gray-600'>Add new member</p>
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
          <Button className='submitbutton' onClick={postData}>CREATE</Button>
        </Form.Item>
        
      </Form>
    </div>
  )
}

export default AddUser