import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { Hamburger, NavBar, NavLinks, NavParent } from "./Styles/HeaderStyle";
import { Typography } from "@mui/material";
import "./Styles/Header.css";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavParent className="navparent">
      <NavBar className="navbar">
       <Typography variant="h5" gutterBottom sx={{fontWeight:"bold"}}>
        World Atlas
      </Typography>
        <Hamburger className="hamburger" onClick={toggleMenu}><MenuIcon sx={{color:"black"}}/></Hamburger>
        <NavLinks className={`nav-links ${isMenuOpen ? "active" : ""}`}>
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
        </NavLinks>
      </NavBar>
    </NavParent>
  );
};

export default Header;
