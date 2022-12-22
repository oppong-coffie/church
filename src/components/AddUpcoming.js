import React from 'react'
import { Form, Input,Button } from 'antd'
import { useState, useEffect } from 'react';
import axios from 'axios';

const AddUpcoming = () => {
  const [ date, setDate ] = useState();
  const [ program, setProgram ] = useState();
  const [ time, setTime ] = useState();
  
      const postData = () => {
      axios.post("http://localhost:3500/upcoming",{
          
          date,
          program,
          time,
        }
        ).then(()=>{alert('New program added')})
      }
  return (
    <div>
        <h1 className='bg-red-600 text-gray-400 font-semibold text-2xl'>Add Upcoming</h1>

    
    <div className='md:w-1/2 p-4'>
        <Form hideRequiredMark layout='vertical'>
        <Form.Item name='date' 
        label='DATE: '
        rules={[
          {
            required: true,
            message:'Date is needed',
          },
        ]}
        >
          <Input placeholder='type the date' onChange={(e) => setDate(e.target.value)}/>

        </Form.Item>

        <Form.Item name='program' 
        label='Program Name: '
        rules={[
          {
            required: true,
            message:'program is needed',
          },
        ]}
        >
          <Input placeholder='type your age' onChange={(e)=>setProgram((e.target.value))}/>
        </Form.Item>

        <Form.Item name='time' 
        label='Time: '
        rules={[
          {
            required: true,
            message:'Time is needed',
          },
        ]}
        >
          <Input placeholder='type the time' onChange={(e)=>setTime((e.target.value))}/>
        </Form.Item>

        <Form.Item>
          <Button className='submitbutton' onClick={postData}>CREATE</Button>
        </Form.Item>
        
      </Form>
    </div>
    </div>
  )
}

export default AddUpcoming