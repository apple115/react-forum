// AdminPage.js
import React from "react";
import UserList from "./UserList";
import PostList from "../PostList";
import "./AdminPage.css";
import My_Menu from "../Menu";

function AdminPage() {
  return (
    <div className="admin-page">
      <My_Menu Page="AdminPage" />
      <h2>Admin Dashboard</h2>
      {/* <UserList /> */}
      {/* <PostList /> */}
    </div>
  );
}

export default AdminPage;
