import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = ({user}) => {
  return (
    <nav className="navbar">
      <h2>PopX</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <li><Link to="/contact">Contact</Link></li>
        {user && <Link to="/account-settings">Account Settings</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
