import React from 'react'
import { Btn2, Btn3 } from './Styles/BtnMUI'
import { NavLink, useNavigate, useNavigation } from 'react-router-dom'
import './Styles/error.css'

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
      <Btn2>Go to Home</Btn2>
      </NavLink>
      <Btn3 onClick={handleOnClick}>Previous page</Btn3>
     </div>
    </div>
  )
}

export default ErrorPage