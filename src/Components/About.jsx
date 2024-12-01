import React from 'react'
import '../App.css'
import './Styles/About.css'
//import { Card, CardContent, Typography } from '@mui/material'
import CountryData from './API/Countrydata.json'
import CountryFacts from './CountryFacts'

const About = () => {
  return (
    <div className='aboutbody'>
      <h1>Interesting Facts about few Countries</h1>
      <div className='facts'>
      {CountryData.map((country) => { return(
         <CountryFacts key={country.id} country={country} />
      )
      })}
      </div>
    </div>
  )
}

export default About