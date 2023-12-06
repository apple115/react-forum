// AdminPage.js
import React from "react";
import UserList from "./UserList";
import PostList from "../PostList";

function AdminPage() {
  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>
      <UserList />
      <PostList />
    </div>
  );
}

export default AdminPage;
