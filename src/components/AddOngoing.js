import React from 'react'
import { Form, Input,Button } from 'antd'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddOngoing = () => {
  const [ preacher, setPreacher ] = useState();
  const [ verse, setVerse ] = useState();
  const [ topic, setTopic ] = useState();
  const [ mc, setMc ] = useState();
  const [ list1, setList1 ] = useState();
  const [ list2, setList2 ] = useState();
  const [ list3, setList3 ] = useState();
  const [ list4, setList4 ] = useState();
  const [ list5, setList5 ] = useState();
  
      const postData = () => {
      axios.post("http://localhost:3500/programlist",{
          
      preacher,
      verse,
      topic,
      mc,
      list1,
      list2,
      list3,
      list4,
      list5,

        }
        ).then(()=>{alert('New program added')})
      }
  return (
    <div>
        <h1 className='bg-red-600 text-gray-400 font-semibold text-2xl'>
          Add Ongoing Program
          </h1>

    
    <div>
        <Form hideRequiredMark layout='vertical'>
        <Form.Item name='reacher' 
        label='Preacher: '
        rules={[
          {
            required: true,
            message:'Preacher"s name is needed',
          },
        ]}
        >
          <Input placeholder='type the date' onChange={(e) => setPreacher(e.target.value)}/>

        </Form.Item>

        <Form.Item name='verse' 
        label='Main Verse: '
        rules={[
          {
            required: true,
            message:'Bible Verse is needed',
          },
        ]}
        >
          <Input placeholder='type your age' onChange={(e)=>setVerse((e.target.value))}/>
        </Form.Item>

        <Form.Item name='topic' 
        label='Topic: '
        rules={[
          {
            required: true,
            message:'Topic is needed',
          },
        ]}
        >
          <Input placeholder='type the time' onChange={(e)=>setTopic((e.target.value))}/>
        </Form.Item>

        <Form.Item name='mc' 
        label='MC: '
        rules={[
          {
            required: true,
            message:'mc is needed',
          },
        ]}
        >
          <Input placeholder='type the time' onChange={(e)=>setMc((e.target.value))}/>
        </Form.Item>
        <Form.Item name='list1' 
        label='List1: '
        rules={[
        ]}
        >
          <Input placeholder='type the program list' onChange={(e)=>setList1((e.target.value))}/>
        </Form.Item>

        <Form.Item name='list2' 
        label='List2: '
        rules={[
        ]}
        >
          <Input placeholder='type the program list' onChange={(e)=>setList2((e.target.value))}/>
        </Form.Item>

        <Form.Item name='list3' 
        label='List3: '
        rules={[
        ]}
        >
          <Input placeholder='type the program list' onChange={(e)=>setList3((e.target.value))}/>
        </Form.Item>

        <Form.Item name='list4' 
        label='List4: '
        rules={[
        ]}
        >
          <Input placeholder='type the time' onChange={(e)=>setList4((e.target.value))}/>
        </Form.Item>

        <Form.Item>
          <Button className='submitbutton' onClick={postData}>CREATE</Button>
        </Form.Item>
        
      </Form>
    </div>
    </div>
  )
}

export default AddOngoing