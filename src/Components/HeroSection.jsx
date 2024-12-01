import React from 'react'
import '../App.css'
import "./Styles/Home.css";
import { Btn } from './Styles/BtnMUI';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <main className="hero-section main">
    <div className="hero-content">
      <h1 className="heading-xl">
        Explore the World, One Country at a Time.
      </h1>
      <p className="paragraph">
        Discover the history, culture, and beauty of every nation. Sort,
        search, and filter through countries to find the details you need.
      </p>
      <NavLink to="/country">
      <Btn>Explore More <KeyboardArrowRightOutlinedIcon /></Btn> 
      </NavLink>
      
    </div>
    <div className="hero-image">
      <img
        src="./Images/travel.jpg"
        alt="world is beauty"
        className="banner-image"
      />
    </div>
</main>
  )
}

export default HeroSection


