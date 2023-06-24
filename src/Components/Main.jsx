import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="containerBody">
      <div className="inputFormWrapper">
        <div className="inputIconWrapper">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Search for a country..." />
        </div>
        <div className="select">
          Filter by Region
          <FontAwesomeIcon icon={faCaretDown} className="caretDown" />
          <div className="dropdown">
            <a href="#">Africa</a>
            <a href="#">America</a>
            <a href="#">Asia</a>
            <a href="#">Europe</a>
            <a href="#">Oceania</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
