// HomePage.js
import React from "react";
import PostList from "../PostList";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";
import My_Menu from "../Menu";

//const { SubMenu } = Menu;

function HomePage() {
  // Mock data for demonstration
  const Posts = [
    { id: 1, title: "Hot Post 1", author: "User1", timestamp: "2023-01-01" },
    { id: 2, title: "Hot Post 2", author: "User2", timestamp: "2023-01-02" },
    { id: 3, title: "Latest Post 1", author: "User3", timestamp: "2023-01-03" },
    { id: 4, title: "Latest Post 2", author: "User4", timestamp: "2023-01-04" },
    // Add more posts as needed
  ];

  const navigate = useNavigate();

  return (
    <div className="home-page">
      <My_Menu Page="HomePage" />
      <div className="post-list-container">
        <h2>Posts</h2>
        <PostList posts={Posts} />
      </div>
    </div>
  );
}

export default HomePage;
