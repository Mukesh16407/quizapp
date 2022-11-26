import React from 'react'
import { Form, message } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const Register = () => {

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

    const onFinish = async (values) => {
    }
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-primary">
         <div className="card w-400 p-3 bg-white">
         <div className="flex flex-col">
         <h1 className="text-2xl">
            QUIZAPP- REGISTER<i class="ri-user-add-line"></i>
          </h1>
          <div className="divider"></div>
          <Form layout="vertical" className="mt-2" onFinish={onFinish}>
            <Form.Item name="name" label="Name">
              <input type="text"id='name' />
            </Form.Item>
            <Form.Item name="email" label="Email">
              <input type="text" id='email'/>
            </Form.Item>
            <Form.Item name="password" label="Password">
              <input type="password" id='password'/>
            </Form.Item>
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="primary-contained-btn mt-2 w-100"
              >
                Register
              </button>
              {/* <Link to="/login">Already a member? Login</Link> */}
            </div>
          </Form>
         </div>
         </div>
    </div>
  )
}
