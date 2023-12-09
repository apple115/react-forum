import React from "react";
import { Form, Input, Button, Select, Menu } from "antd";
import {
  HomeOutlined,
  FireOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function My_Menu({ Page }) {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={[Page]}>
      <Menu.Item key="HomePage" icon={<FireOutlined />}>
        <Link to="/">HomePage</Link>
      </Menu.Item>
      <Menu.Item key="SearchPage" icon={<ClockCircleOutlined />}>
        <Link to="/search">SearchPage</Link>
      </Menu.Item>
      <Menu.Item key="PublishPage" icon={<ClockCircleOutlined />}>
        <Link to="/push">PublishPage</Link>
      </Menu.Item>
    </Menu>
  );
}

export default My_Menu;
