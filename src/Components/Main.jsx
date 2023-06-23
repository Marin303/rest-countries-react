import React from "react";

const Main = () => {
  return (
    <div className="containerBody">
      <div className="inputFormWrapper">
        <input type="text" placeholder="Search for a country..." />
        <form>
          <select name="region" id="region" defaultValue="default">
            <option value="default" disabled hidden>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Main;
