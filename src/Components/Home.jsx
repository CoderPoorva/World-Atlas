import React from 'react'
import '../App.css'
import "./Styles/Home.css";
import { Btn } from './Styles/BtnMUI';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import HeroSection from './HeroSection';
import About from './About';


const Home = () => {
  return (

   <>
   <HeroSection/>
   <About/>
   </>
    
  )
}

export default Home