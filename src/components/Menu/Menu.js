import React, { useContext } from "react";
import { Form, Input, Button, Select, Menu } from "antd";
import {
  HomeOutlined,
  FireOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import AuthContext from "../../AuthContext";

function My_Menu({ Page }) {
  const { isAuthenticated, user, isAdmin } = useContext(AuthContext);
  const menuItems = [
    {
      key: "HomePage",
      path: "/",
      icon: <HomeOutlined />,
      title: "HomePage",
    },
    {
      key: "SearchPage",
      path: "/search",
      icon: <ClockCircleOutlined />,
      title: "SearchPage",
    },
  ];

  if (!isAuthenticated) {
    menuItems.push({
      key: "PublishPage",
      path: "/push",
      icon: <ClockCircleOutlined />,
      title: "PublishPage",
    });
    menuItems.push({
      key: "LoginPage",
      path: "/login",
      icon: <ClockCircleOutlined />,
      title: "LoginPage",
    });
    menuItems.push({
      key: "RegisterPage",
      path: "/register",
      icon: <ClockCircleOutlined />,
      title: "RegisterPage",
    });
  }

  if (isAdmin) {
    menuItems.push({
      key: "AdminPage",
      path: "/admin",
      icon: <UserOutlined />,
      title: "AdminPage",
    });
  }

  return (
    <Menu mode="horizontal" defaultSelectedKeys={[Page]}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.path}>{item.title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default My_Menu;
