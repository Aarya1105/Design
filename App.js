import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import AccountSettings from "./pages/AccountSettings";

function App() {
  const [user, setUser] = useState(null); // Ensure setUser is defined

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} /> {/* ✅ Pass setUser here */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
