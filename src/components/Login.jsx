// src/components/Login.jsx
import { useState } from "react";
import  '../Login.css'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
   const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (username.trim()) onLogin(username);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}