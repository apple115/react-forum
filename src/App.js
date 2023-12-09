// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import PostDetail from "./components/PostDetail";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import AdminPage from "./components/AdminPage";
import PublishPage from "./components/PublishPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/push" element={<PublishPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
