import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Ensure this CSS file is present

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fetch user from localStorage (or backend)
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && savedUser.email === email) {
      alert("Login successful!");
      navigate("/accountsettings"); // Redirect after login
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to PopX</h2>
      <p>Enter your details to access your account.</p>

      <form className="login-form" onSubmit={handleLogin}>
        <label className="purple-label">
          Email Address <span className="asterisk">*</span>
        </label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="purple-label">
          Password <span className="asterisk">*</span>
        </label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
