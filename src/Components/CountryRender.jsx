import React, { useEffect, useState } from "react";
import jsonData from "../data.json";

const CountryRender = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div className="CountryContainer">
      {data.slice(0, 10).map((country, index) => (
        <div className="CountryRender" key={index}>
          <img src={country.flags.png} alt="" />
          <div className="descriptionWrapper">
            <p>{country.name}</p>
            <p><b>Population:</b> {country.population}</p>
            <p><b>Region:</b> {country.region}</p>
            <p><b>Capital:</b> {country.capital}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryRender;
