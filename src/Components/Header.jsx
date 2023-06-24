import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <header>
        <p>Where in the world?</p>
        <div>
          <FontAwesomeIcon icon={faMoon} className="moonIcon" />
          Dark Mode
        </div>
      </header>
    </div>
  );
}

export default Header;
