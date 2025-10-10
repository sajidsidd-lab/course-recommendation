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
   <div className="hero-container">
  <div className="hero-content">
     <img src="/logo.png" alt="Course Recommendor Logo" className="logo" />

    <h1 className="app-title">Course-Recommendor</h1>
    <p className="tagline">Find the perfect course for your goals</p>
    <div className="login-box">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  </div>
</div>
  );
}