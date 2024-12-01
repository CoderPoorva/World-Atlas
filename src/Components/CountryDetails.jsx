import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryData } from "./API/postApi";
import Loader from "./loader";
import { Card, Section } from "./Styles/CountryDetailsCard";
import { Btn2 } from "./Styles/BtnMUI";
import './Styles/CountryDetailsCard.css'

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

  if (isPending) return <Loader />;

  return (
    <Section>
      {country.length > 0 ? (
        <Card>
          <div className="img">
            <img src={country[0].flags.png} alt={country[0].name.official} />
          </div>
          <div className="containerInfo">
            <h1>{country[0].name.official}</h1>
            <div>
              <p>
                <span className="card-description"> Capital:</span>
                {country[0].capital}
              </p>
            </div>
            <p>
              <span className="card-description"> Native Names:</span>
              {Object.keys(country[0].name.nativeName)
                .map((key) => country[0].name.nativeName[key].common)
                .join(", ")}
            </p>
            <p>
              <span className="card-description"> Population: </span>
              {country[0].population}
            </p>
            <p>
              <span className="card-description"> Continent:</span>
              {country[0].region}
            </p>
            <p>
              <span className="card-description"> Sub Region:</span>
              {country[0].subregion}
            </p>
            <p>
              <span className="card-description"> Capital:</span>
              {country[0].capital}
            </p>

            <p>
              <span className="card-description">Top Level Domain:</span>
              {country[0].tld[0]}
            </p>
            <p>
              <span className="card-description"> Currencies: </span>
              {Object.keys(country[0].currencies)
                .map((curElem) => country[0].currencies[curElem].name)
                .join(", ")}
              {Object.keys(country[0].currencies)
                .map((curElem) => country[0].currencies[curElem].symbol)
                .join(", ")}
            </p>
            <p>
              <span className="card-description">Languages: </span>
              {Object.keys(country[0].languages)
                .map((key) => country[0].languages[key])
                .join(", ")}
            </p>
          </div>
          <NavLink to="/country" className="backBtn">
            <Btn2>Go Back</Btn2>
          </NavLink>
        </Card>
      ) : (
        <Loader />
      )}
    </Section>
  );
};

export default CountryDetails;
