import React, { createContext, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
});

export default AuthContext;
