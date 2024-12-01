import React, { useEffect, useState, useTransition } from "react";
import { getCountry } from "./API/postApi";

import CountryCard from "./CountryCard";
import "./Styles/Country.css";
import { SearchFilter } from "./SearchFilter";
import Loader from "./Loader";

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

  if (isPending) return (<div className="load"><Loader /></div> );

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
    <section className="countryBodyParent">
       <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
    <section className="countryBody">
      {filterCountries.map((country) => {
        return <CountryCard country={country} key={country.index} />;
      })}
    </section>
    </section>
  );
};

export default Country;
