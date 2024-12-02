import React from 'react'
import '../App.css'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { NavLink } from 'react-router-dom';
import { Img, Main } from './Styles/HeroSection';
import { Button, Typography } from '@mui/material';
import travel from '../../public/Images/travel.jpg';

const HeroSection = () => {
  return (
    <Main>
    <div className="hero-content">
     <Typography variant="h2" gutterBottom sx={{fontWeight:"bold"}}>
      Explore the World, One Country at a Time.
      </Typography>
      <Typography variant="subtitle1" gutterBottom >
      Discover the history, culture, and beauty of every nation. Sort,
      search, and filter through countries to find the details you need.
      </Typography>
      <NavLink to="/country">
      <Button variant="contained" sx={{marginTop:"2rem"}}>Explore More <KeyboardArrowRightOutlinedIcon /></Button>
      </NavLink>
    </div>
    <Img>
    <img src={travel}
        alt="world is beauty"
        className="banner-image"
      /></Img>
</Main>
  )
}

export default HeroSection


