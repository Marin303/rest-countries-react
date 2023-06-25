import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = ({ darkMode, onModeToggle }) => {
  return (
    <div className={`header ${darkMode ? "" : "light"}`}>
      <p>Where in the world?</p>
      <button onClick={onModeToggle}>
        <FontAwesomeIcon
          icon={darkMode ? faSun : faMoon}
          className="modeIcon"
        />
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
