import React from 'react'
import { Form, Input,Button } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import axios from 'axios';
import { useState, useEffect } from 'react';
import userEvent from '@testing-library/user-event';

const ModifyTithe = () => {
  
  
  const [ tithes, setTithes ] = useState();
 
  const postData = () => {
   const user = axios.get("http://localhost:3500/finances/1").then(r =>r.data).then((user)=>{axios.put("http://localhost:3500/finances/1", {
      giving: user.giving,
      tithes,
      offering: user.offering,
      harvest: user.harvest,
  }).then(()=>{alert('Amount updated')})})

   
    

  }

  return (
    <div className='flex justify-center bg-slate-700 h-screen'>
    <div className='w-8/12 bg-slate-500 m-24 p-7 shadow-2xl'>
        <h1 className='text-3xl'>Modify Giving</h1>

        <Form>
        <Form.Item name='amount' 
        label='New Amount: '
        rules={[
          {
            required: true,
            message:'Time is needed',
          },
        ]}
        >
          <Input placeholder='type the new amouut' onChange={(e)=>setTithes((e.target.value))}/>
        </Form.Item>
        <Form.Item>
          <Button className='submitbutton' onClick={postData}>Modify</Button>
        </Form.Item>
            
        </Form>
    </div>
    </div>
  )
}

export default ModifyTithe