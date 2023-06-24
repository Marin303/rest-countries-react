import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import CountryRender from "./CountryRender";

const Main = () => {
  const [active, setActive] = useState(false);
  const selectRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const handleActiveClick = () => {
    setActive(!active);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };
 
  return (
    <div className="containerBody">
      <div className="inputFormWrapper">
        <div className="inputIconWrapper">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="Search for a country..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <button className="select" onClick={handleActiveClick} ref={selectRef}>
          Filter by Region
          <FontAwesomeIcon icon={faCaretDown} className="caretDown" />
          <div className={`dropdown ${active ? "active" : ""}`}>
            
             <a href="/#" onClick={() => handleRegionSelect("All")}>
              All
            </a>
            <a href="/#" onClick={() => handleRegionSelect("Africa")}>
              Africa
            </a>
            <a href="/#" onClick={() => handleRegionSelect("Americas")}>
              America
            </a>
            <a href="/#" onClick={() => handleRegionSelect("Asia")}>
              Asia
            </a>
            <a href="/#" onClick={() => handleRegionSelect("Europe")}>
              Europe
            </a>
            <a href="/#" onClick={() => handleRegionSelect("Oceania")}>
              Oceania
            </a>
          </div>
        </button>
      </div>
      <CountryRender inputValue={inputValue} selectedRegion={selectedRegion} />
    </div>
  );
};

export default Main;
