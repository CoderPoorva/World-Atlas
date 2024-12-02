import React from 'react'
import { NavLink } from 'react-router-dom';
import { CountryCardContainer, CountryCards, CountryInfo } from './Styles/CountryCardStyle';
import { Button, Typography } from '@mui/material';

const CountryCard = ({country}) => {
  const { flags, name, population, region, capital } = country;
  return (
    <CountryCards className="country-card">
    <CountryCardContainer className="container-card">
      <img src={flags.svg} alt={flags.alt} />

      <CountryInfo className="countryInfo">
        <Typography variant="h5" gutterBottom sx={{fontWeight:"bold"}}>
        {name.common}
      </Typography>
        <p>
          <span className="card-description" style={{fontWeight: "bold"}}>Capital:</span>
          {capital[0]}
        </p>
        <p>
          <span className="card-description" style={{fontWeight: "bold"}}>Population:</span>
          {population}
        </p>
        <p>
          <span className="card-description" style={{fontWeight: "bold"}}>Region:</span> {region}
        </p>
       
       <NavLink to={`/country/${name.common}`}>
       <Button variant="contained" sx={{marginTop:"1rem", fontSize:"10px"}}>Read More</Button>
       </NavLink>
      </CountryInfo>
    </CountryCardContainer>
  </CountryCards>
  )
}

export default CountryCard