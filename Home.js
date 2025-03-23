import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link to="/signup" className="btn primary">Create Account</Link>
      <Link to="/login" className="btn secondary">Already Registered? Login</Link>
    </div>
  );
};

export default Home;
