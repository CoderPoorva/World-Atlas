import React, { useEffect, useState, useTransition } from "react";
import { getCountry } from "./API/postApi";
import CountryCard from "./CountryCard";
import { SearchFilter } from "./SearchFilter";
import Loader from "./Loader";
import { CountryBody, CountryBodyParent, Load } from "./Styles/CountryStyle";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountry();
      setCountries(res.data);
      console.log(res.data);
    });
  }, []);

  if (isPending)
    return (
      <Load>
        <Loader />
      </Load>
    );

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // here is the main logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <CountryBodyParent className="countryBodyParent">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <CountryBody className="countryBody">
        {filterCountries.map((country) => {
          return <CountryCard country={country} key={country.index} />;
        })}
      </CountryBody>
    </CountryBodyParent>
  );
};

export default Country;
