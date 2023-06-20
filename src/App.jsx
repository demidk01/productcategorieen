import React, { useState } from "react";
import "./App.css";
import Homescreen from "./Homescreen";
import Nextscreen from "./Nextscreen";

function App() {
  const [currentScreen, setCurrentScreen] = useState("Homescreen");

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="App">
      {currentScreen === "Homescreen" && <Homescreen navigate={navigate} />}
      {currentScreen === "Nextscreen" && <Nextscreen />}
    </div>
  );
}

export default App;
