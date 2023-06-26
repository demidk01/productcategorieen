import React, { useState } from "react";
import "./App.css";
import Homescreen from "./Homescreen";
import Nextscreen from "./Nextscreen";
import Categorieoverzicht from "./Categorieoverzicht";
import Categorie from "./Categorie";

function App() {
  const [currentScreen, setCurrentScreen] = useState("Homescreen");

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "Homescreen":
        return <Homescreen navigate={navigate} />;
      case "Nextscreen":
        return <Nextscreen navigate={navigate} />;
      case "Categorie":
        return <Categorie navigate={navigate} />;
      case "Categorieoverzicht":
        return <Categorieoverzicht navigate={navigate} />;
      default:
        return null;
    }
  };

  return <div className="App">{renderScreen()}</div>;
}

export default App;
