import React from 'react'
import { NavLink } from 'react-router-dom';
import './Styles/CountryCard.css'
import { Btn2 } from './Styles/BtnMUI';

const CountryCard = ({country}) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="country-card">
    <div className="container-card">
      <img src={flags.svg} alt={flags.alt} />

      <div className="countryInfo">
        <p className="card-title">
          {name.common}
        </p>
        <p>
          <span className="card-description">Capital:</span>
          {capital[0]}
        </p>
        <p>
          <span className="card-description">Population:</span>
          {population}
        </p>
        <p>
          <span className="card-description">Region:</span> {region}
        </p>
       
       <NavLink to={`/country/${name.common}`}>
       <Btn2>Read More</Btn2>
       </NavLink>
      </div>
    </div>
  </li>
  )
}

export default CountryCard