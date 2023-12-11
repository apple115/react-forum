import React, { useState } from "react";
import LoginForm from "./LoginForm";
import "./LoginPage.css";
import My_Menu from "../Menu";
import { Form, Input, Button, Layout, Typography } from "antd";
import AuthContext from "../../AuthContext";

function LoginPage() {
  const { isAuthenticated, user, isAdmin } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    // For demonstration, let's assume authentication is successful
    console.log("User logged in:", username);
  };

  return (
    <div className="login-page">
      <Layout>
        <My_Menu Page="LoginPage" />
        <Layout.Content className="login-page">
          <Typography.Title level={2}>Login</Typography.Title>
          <Form onFinish={handleSubmit}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input onChange={(e) => setUsername(e.target.value)} />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default LoginPage;
// LoginPage.js
