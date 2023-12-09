import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { UserOutlined, FormOutlined } from "@ant-design/icons";
import "./PublishPage.css";
import My_Menu from "../Menu";

const { TextArea } = Input;
const { Option } = Select;

function PublishPage() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Handle the submission of the post data (e.g., send to the server)
    console.log("Received values:", values);
    // Add logic to send the post data to your server or perform other actions
  };

  return (
    <div className="publish-page">
      <My_Menu Page="PublishPage" />
      <h2>Publish a Post</h2>
      <Form form={form} name="publish-form" onFinish={onFinish}>
        <Form.Item
          name="title"
          rules={[
            { required: true, message: "Please enter the title of your post!" },
          ]}
        >
          <Input
            prefix={<FormOutlined className="site-form-item-icon" />}
            placeholder="Title"
          />
        </Form.Item>

        <Form.Item
          name="content"
          rules={[
            {
              required: true,
              message: "Please enter the content of your post!",
            },
          ]}
        >
          <TextArea rows={4} placeholder="Content" />
        </Form.Item>

        <Form.Item
          name="type"
          rules={[
            { required: true, message: "Please select the type of your post!" },
          ]}
        >
          <Select placeholder="Select Type">
            <Option value="announcement">Announcement</Option>
            <Option value="discussion">Discussion</Option>
            {/* Add more options as needed */}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Publish
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default PublishPage;
