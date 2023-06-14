import React, { useState } from "react";
import "./App.css";
import MWWlogo from "./assets/MWW-logo.png";
import {
  Button,
  Heading,
  Text,
  EmptyState,
  IconButton,
  TextField,
} from "@myonlinestore/bricks";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="MWW-logo">
          <img src={MWWlogo} />
        </div>
        <ul>
          <li>
            <a href="#">
              <span className="item">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item">Orders</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item">Klanten</span>
            </a>
          </li>
          <li>
            <a href="#" className="active">
              <span className="item">Producten</span>
            </a>
            <div className="submenu">
              <a href="#" className="active">
                <span className="item">Categorieën</span>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="content">
        <div className="topbar">
          <div className="searchbar">
            <TextField prefix="Artikelen" placeholder="Zoeken" />
          </div>
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
          />
          <Button className="catadd" title="Categorie toevoegen" />
        </div>
      </div>
    </div>
  );
}

export default App;
