import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import items from "../data/items.js";



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
