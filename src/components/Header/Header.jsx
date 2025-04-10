import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png"
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo" onClick={closeMenu}>
        <img src={logo}/>
        </Link>
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                الرئيسية
              </Link>
            </li>
            <li>
              <Link to="/All-Real-Estate" onClick={closeMenu}>
                العقارات
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                من نحن
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                اتصل بنا
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
