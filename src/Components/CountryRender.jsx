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
          {country.name}
        </div>
      ))}
    </div>
  );
};

export default CountryRender;
