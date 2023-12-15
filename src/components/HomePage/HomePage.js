// HomePage.js
import React, { useEffect, useState } from "react";
import PostList from "../PostList";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";
import My_Menu from "../Menu";
import axios from "axios";

//const { SubMenu } = Menu;

function HomePage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  // Mock data for demonstration
  // const Posts = [
  //   { id: 1, title: "Hot Post 1", author: "User1", timestamp: "2023-01-01" },
  //   { id: 2, title: "Hot Post 2", author: "User2", timestamp: "2023-01-02" },
  //   { id: 3, title: "Latest Post 1", author: "User3", timestamp: "2023-01-03" },
  //   { id: 4, title: "Latest Post 2", author: "User4", timestamp: "2023-01-04" },
  //   // Add more posts as needed
  // ];
  // TODO 使用API获取数据
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3001/posts"); // Replace "YOUR_API_ENDPOINT" with the actual API endpoint
        const rawData = response.data; // Assuming the response is an array of raw data
        const cleanedPosts = cleanData(rawData);
        setPosts(cleanedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const cleanData = (rawData) => {
    // Implement your data cleaning logic here
    return rawData.map((post) => ({
      id: post.id,
      title: post.title,
      author: post.author,
      timestamp: post.timestamp,
      // Add other properties according to your Post structure
    }));
  };

  return (
    <div className="home-page">
      <My_Menu Page="HomePage" />
      <div className="post-list-container">
        <h2>Posts</h2>
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default HomePage;
