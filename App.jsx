import React, { useState } from "react";
import "./App.css";
import afbeelding from "./assets/MainMenu.png";
import {
  Button,
  Heading,
  Text,
  EmptyState,
  IconButton,
} from "@myonlinestore/bricks";

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="mainmenu">
          <img className="'mainmenuimage" src={afbeelding} />
        </div>
        <div className="catheader">
          <Heading>Categorieën</Heading>
          <Text>
            Je hebt onderstaande categorieën aangemaakt. Zit de juiste categorie
            er niet tussen? bekijk in het vraag & antwoord artikel hoe je een
            categorie aanmaakt. Wijzigingen worden automatisch opgeslagen.
          </Text>
          <IconButton icon="filter" iconSize="small" />
        </div>
        <br></br>
        {/* <Button onClick={() => alert("Klik")} title="Hoi!" variant="primary" /> */}
        <br></br>

        <div className="empty">
          <EmptyState
            title="Tijd voor je eerste categorie!"
            message="Maak het beheren van groepen producten makkelijker."
            horizontal="yes"
          />
          <Button className="catadd" title="Categorie toevoegen" />
        </div>
      </div>
    </div>
  );
}

export default App;
