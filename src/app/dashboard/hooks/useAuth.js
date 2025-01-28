// THIS IS EXAMPLE CODE FOR A HOOK, REPLACE WITH ACTUAL LOGIC

import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);

  // Simulate login
  const login = async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "user@example.com" && password === "password") {
          setUser({ email });
          resolve({ success: true });
        } else {
          resolve({ success: false, error: "Invalid credentials" });
        }
      }, 1000); // Simulate API delay
    });
  };

  // Simulate logout
  const logout = () => {
    setUser(null);
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return user !== null;
  };

  return { user, login, logout, isAuthenticated };
}
