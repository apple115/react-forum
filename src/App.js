// App.js
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import PostDetail from "./components/PostDetail";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import AdminPage from "./components/AdminPage";
import PublishPage from "./components/PublishPage";
import AuthContext from "./AuthContext";

function App() {
  // Initialize state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Context provider
  const contextValue = {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
    isAdmin,
    setIsAdmin,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {isAuthenticated && <Route path="/admin" element={<AdminPage />} />}
            {isAuthenticated && (
              <Route path="/push" element={<PublishPage />} />
            )}
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
