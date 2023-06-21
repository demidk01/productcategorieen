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

  return (
    <div className="App">
      {currentScreen === "Homescreen" && <Homescreen navigate={navigate} />}
      {currentScreen === "Nextscreen" && <Nextscreen navigate={navigate} />}
      {currentScreen === "Categorie" && <Categorie navigate={navigate} />}
      {currentScreen === "Categorieoverzicht" && <Categorieoverzicht />}
    </div>
  );
}

export default App;
