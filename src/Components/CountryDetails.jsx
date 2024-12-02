import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryData } from "./API/postApi";
import Loader from "./Loader";
import { Card, Load, Section } from "./Styles/CountryDetailsCard";
import { Button } from "@mui/material";

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData(params.id);
      console.log(res.data[0]);
      // console.log(country);

      if (res.status === 200) {
        setCountry(res.data);
        // console.log(country);
      }
    });
  }, [params.id]);

  if (isPending) return(<Load><Loader /></Load>) ;

  return (
    <Section>
      {country.length > 0 ? (
        <Card>
          <div className="img">
            <img src={country[0].flags.png} alt={country[0].name.official}/>
          </div>
          <div className="containerInfo">
            <h1 style={{fontSize:"2rem", color:"#0c8201", textDecoration:"underline", marginBottom:"1rem"}}>{country[0].name.official}</h1>
            <div>
              <p style={{fontSize:"1.5rem"}}>
                <span className="card-description" style={{lineHeight:"2rem", fontWeight:"bold"}}> Capital: </span>
                {country[0].capital}
              </p>
            </div>
            <p style={{fontSize:"1.5rem"}}>
              <span className="card-description" style={{lineHeight:"2rem", fontWeight:"bold"}}> Native Names:</span>
              {Object.keys(country[0].name.nativeName)
                .map((key) => country[0].name.nativeName[key].common)
                .join(", ")}
            </p>
            <p style={{fontSize:"1.5rem"}}>
              <span className="card-description" style={{lineHeight:"2rem", fontWeight:"bold"}}> Population: </span>
              {country[0].population}
            </p>
            <p style={{fontSize:"1.5rem"}}>
              <span className="card-description" style={{lineHeight:"2rem", fontWeight:"bold"}}> Continent:</span>
              {country[0].region}
            </p>
            <p style={{fontSize:"1.5rem"}}>
              <span className="card-description" style={{lineHeight:"2rem", fontWeight:"bold"}}> Sub Region:</span>
              {country[0].subregion}
            </p>
            <p style={{fontSize:"1.5rem"}}>
              <span className="card-description" style={{lineHeight:"2rem", fontWeight:"bold"}}>Top Level Domain:</span>
              {country[0].tld[0]}
            </p>
            <p style={{fontSize:"1.5rem"}}>
              <span className="card-description" style={{lineHeight:"2rem", fontWeight:"bold"}}> Currencies: </span>
              {Object.keys(country[0].currencies)
                .map((curElem) => country[0].currencies[curElem].name)
                .join(", ")}
                <span> (
                {Object.keys(country[0].currencies)
                .map((curElem) => country[0].currencies[curElem].symbol)
                .join(", ")})
                </span>
             
            </p>
            <p style={{fontSize:"1.5rem"}}>
              <span className="card-description" style={{lineHeight:"2rem", fontWeight:"bold"}}>Languages: </span>
              {Object.keys(country[0].languages)
                .map((key) => country[0].languages[key])
                .join(", ")}
            </p>
          </div>
          <NavLink to="/country" className="backBtn">
            <Button variant="contained">Go Back</Button>
          </NavLink>
        </Card>
      ) : (
        <Loader />
      )}
    </Section>
  );
};

export default CountryDetails;
