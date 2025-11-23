import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Component/Css.css";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/loginpage";
  };

  return (
    <nav className="pro-navbar">
      <div className="nav-container">
        <div className={`nav-left ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-logo">Lost & Found</Link>
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/list" className="nav-item">Lost & Found Items</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>

        <div className={`nav-right ${menuOpen ? "active" : ""}`}>
          {!isLogin && <Link to="/loginpage" className="nav-btn login">Login</Link>}
          {!isLogin && <Link to="/registerpage" className="nav-btn register">Register</Link>}
          {isLogin && (
            <button className="nav-btn logout" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>

        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
