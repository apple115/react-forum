// HomePage.js
import React from "react";
import PostList from "../PostList";

function HomePage() {
  // Mock data for demonstration
  const hotPosts = [
    { id: 1, title: "Hot Post 1", author: "User1", timestamp: "2023-01-01" },
    { id: 2, title: "Hot Post 2", author: "User2", timestamp: "2023-01-02" },
    // Add more posts as needed
  ];

  const latestPosts = [
    { id: 3, title: "Latest Post 1", author: "User3", timestamp: "2023-01-03" },
    { id: 4, title: "Latest Post 2", author: "User4", timestamp: "2023-01-04" },
    // Add more posts as needed
  ];

  return (
    <div className="home-page">
      <h2>Hot Posts</h2>
      <PostList posts={hotPosts} />

      <h2>Latest Posts</h2>
      <PostList posts={latestPosts} />
    </div>
  );
}

export default HomePage;
