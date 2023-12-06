// RegisterPage.js
import React, { useState } from "react";
import RegisterForm from "./RegisterForm";

function RegisterPage() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (userData) => {
    // Perform registration logic here
    // For demonstration, let's assume registration is successful
    setIsRegistered(true);
    console.log("User registered:", userData);
  };

  return (
    <div className="register-page">
      {isRegistered ? (
        <p>You are already registered.</p>
      ) : (
        <>
          <h2>Register</h2>
          <RegisterForm onRegister={handleRegister} />
        </>
      )}
    </div>
  );
}

export default RegisterPage;
