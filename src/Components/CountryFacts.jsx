import React from 'react'
import { CardContent, Typography } from '@mui/material'
import { CardBody } from './Styles/AboutStyle'

const CountryFacts = ({country}) => {
  return (
    <CardBody>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 18 , fontWeight:'bold'}}>
          {country.countryName}
        </Typography>
        <Typography component="div" sx={{fontSize:14, color:'text.secondary'}}>
          Capital:<Typography component='span' sx={{fontSize:14, color:'text.primary', fontWeight:'bold'}}>{country.capital}</Typography>
        </Typography>
        <Typography sx={{ color: 'text.secondary',fontSize:14 }}>Population: <Typography component='span' sx={{fontSize:14, color:'text.primary', fontWeight:'bold'}}>{country.population}</Typography></Typography>
        <Typography  sx={{ color: 'text.secondary',fontSize:14 }}>
          Interesting Facts: <Typography variant="body2" component='span' sx={{fontSize:14, color:'text.primary', fontWeight:'bold'}}>{country.interestingFact}</Typography>
        </Typography>
        <Typography  sx={{ color: 'text.secondary',fontSize:14 }}>
          Flora: <Typography variant="body2" component='span' sx={{fontSize:14, color:'text.primary', fontWeight:'bold'}}>{country.Flora}</Typography>
        </Typography>
        <Typography  sx={{ color: 'text.secondary',fontSize:14 }}>
          Fauna: <Typography variant="body2" component='span' sx={{fontSize:14, color:'text.primary', fontWeight:'bold'}}>{country.Fauna}</Typography>
        </Typography>
      </CardContent>
    </CardBody>
  )
}

export default CountryFacts
