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

  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <div className="containerBody">
      <div className="inputFormWrapper">
        <div className="inputIconWrapper">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Search for a country..." />
        </div>
        <button className="select" onClick={handleActiveClick} ref={selectRef}>
          Filter by Region
          <FontAwesomeIcon icon={faCaretDown} className="caretDown" />
          <div className={`dropdown ${active ? "active" : ""}`}>
            <a href="#">Africa</a>
            <a href="#">America</a>
            <a href="#">Asia</a>
            <a href="#">Europe</a>
            <a href="#">Oceania</a>
          </div>
        </button>
      </div>
      <CountryRender />
    </div>
  );
};

export default Main;
