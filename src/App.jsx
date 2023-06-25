import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "" : "light"}`}>
      <Header darkMode={darkMode} onModeToggle={handleModeToggle} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
