"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { login, setAuth, setUser } from "@/redux/slices/authSlice";
import { Button, Form, Input } from "antd";
import { request } from "@/server/request";
import { useState } from "react";
const Login = () => {
  const {loading, setLoading}=useState();
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  async function onFinish(e) {
    try {
      const {data:{accesstoken,user}}= await request.post(`auth/login`,e);
      router.push("/")
      dispatch(setAuth())
      dispatch(setUser(user))
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div
      style={{ height: "81vh" }}
      className="text-center flex items-center justify-center pt-20"
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button loading={loading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
