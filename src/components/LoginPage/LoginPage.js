// LoginPage.js
import React, { useState } from "react";
import LoginForm from "./LoginForm";

function LoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    // Perform authentication logic here
    // For demonstration, let's assume authentication is successful
    setIsAuthenticated(true);
    console.log("User logged in:", username);
  };

  return (
    <div className="login-page">
      {isAuthenticated ? (
        <p>You are already logged in.</p>
      ) : (
        <>
          <h2>Login</h2>
          <LoginForm onLogin={handleLogin} />
        </>
      )}
    </div>
  );
}

export default LoginPage;
