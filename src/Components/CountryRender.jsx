import React, { useEffect, useState } from "react";
import jsonData from "../data.json";

const CountryRender = ({ inputValue, selectedRegion, darkMode }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  const filteredData = data.filter((country) => {
    const nameMatch = country.name
      .toLowerCase()
      .includes(inputValue.toLowerCase());
    const regionMatch =
      selectedRegion === "All" || country.region === selectedRegion;
    return nameMatch && regionMatch;
  });

  return (
    <div className={`CountryContainer ${darkMode ? "" : "light"}`}>
      {filteredData.slice(0, 8).map((country, index) => (
        <div className="CountryRender" key={index}>
          <img src={country.flags.png} alt="" />
          <div className="descriptionWrapper">
            <p>{country.name}</p>
            <p>
              <b>Population:</b> {country.population}
            </p>
            <p>
              <b>Region:</b> {country.region}
            </p>
            <p>
              <b>Capital:</b> {country.capital}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryRender;
