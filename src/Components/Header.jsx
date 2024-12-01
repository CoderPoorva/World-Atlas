import React, { useState } from "react";
import "./Styles/Header.css";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navparent">
      <nav className="navbar">
        <div className="logo">World Atlas</div>
        <div className="hamburger" onClick={toggleMenu}><MenuIcon/></div>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
          </li>
          <li>
            <NavLink to="/country" onClick={toggleMenu}>Country</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
