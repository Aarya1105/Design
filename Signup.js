import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Ensure this CSS file is present

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Store user data in localStorage
    const newUser = { fullName, email };
    localStorage.setItem("user", JSON.stringify(newUser));

    alert("Signup successful! Please log in.");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="signup-container">
      <h2>Create Your PopX Account</h2>
      <p>Fill in the details below to get started.</p>

      <form className="signup-form" onSubmit={handleSignup}>
        <label className="purple-label">
          Full Name <span className="asterisk">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

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
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label className="purple-label">
          Confirm Password <span className="asterisk">*</span>
        </label>
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
