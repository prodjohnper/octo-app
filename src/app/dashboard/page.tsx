// THIS IS EXAMPLE CODE FOR A HOOK BEING USED, REPLACE WITH ACTUAL LOGIC
"use client";
import { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import "./styles/dashboard.module.css";

const Dashboard = () => {
  const { login, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      setError("");
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {user && <p>Welcome, {user}!</p>}
    </div>
  );
};
export default Dashboard;
