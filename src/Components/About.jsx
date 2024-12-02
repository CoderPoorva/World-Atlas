import React from "react";
import "../App.css";
import CountryData from "./API/Countrydata.json";
import CountryFacts from "./CountryFacts";
import { AboutBody, CountryFactsBody } from "./Styles/AboutStyle";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <AboutBody className="aboutbody">
      <Typography
        variant="h4"
        gutterBottom
        sx={{ margin: "1rem", fontWeight: "bold" }}
      >
        Interesting Facts about few Countries
      </Typography>
      <CountryFactsBody className="facts">
        {CountryData.map((country) => {
          return <CountryFacts key={country.id} country={country} />;
        })}
      </CountryFactsBody>
    </AboutBody>
  );
};

export default About;
