// RegisterPage.js
import React, { useState } from "react";
import { Form, Input, Button, Layout, Typography, message } from "antd";
import "./RegisterPage.css";
import My_Menu from "../Menu";
import axios from "axios";

function RegisterPage() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onFinish = async () => {
    if (password !== confirmPassword) {
      message.error("Passwords do not match!");
      return;
    }

    // Perform registration logic here (implement your logic)
    try {
      // Make a POST request to your server
      //

      const response = await axios.post("http://127.0.0.1:3001/register", {
        username,
        email,
        password,
      });

      // Assuming your server responds with some data upon successful registration
      console.log("Server Response:", response.data);

      // Update the state accordingly
      setIsRegistered(true);
      message.success("Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error);

      // Display a more detailed error message
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server Response Data:", error.response.data);
        console.error("Server Response Status:", error.response.status);
        console.error("Server Response Headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
      message.error("Registration failed. Please try again.");
    }
  };
  return (
    <div className="register-page">
      <Layout>
        <My_Menu Page="RegisterPage" />
        <Layout.Content className="login-page">
          <Typography.Title level={2}>Register</Typography.Title>
          <Form onFinish={onFinish}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
              ]}
            >
              <Input
                value={email}
                onChange={(e) => setUseremail(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Please confirm your password!" },
              ]}
            >
              <Input.Password
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register In
              </Button>
            </Form.Item>
          </Form>
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default RegisterPage;
