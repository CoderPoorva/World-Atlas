import React from 'react'
import { NavLink, useNavigate, useNavigation } from 'react-router-dom'
import './Styles/error.css'
import { Button } from '@mui/material';

const ErrorPage = () => {

  const navigation= useNavigate();

  const handleOnClick = () => {
    navigation(-1);
  }

  return (
    <div className='errorPage'>
     <div className='image'>
      <img src="./Images/errorpic.png" alt="" />
     </div>
     <div className='secondPart'>
      <NavLink to="/">
      <Button variant="contained">Go to Home</Button>
      </NavLink>
      <Button variant="outlined" onClick={handleOnClick}>Previous page</Button>
     </div>
    </div>
  )
}

export default ErrorPage