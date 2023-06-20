import React, { useState } from "react";
import MWWlogo from "./assets/MWW-logo.png";
import Sidebar from "./Sidebar";

import {
  Button,
  Heading,
  Text,
  EmptyState,
  TextField,
} from "@myonlinestore/bricks";

function Categorieoverzicht(navigate) {
  return (
    <div className="App">
      <Sidebar logo={MWWlogo} />

      <div className="content">
        <div className="topbar">
          <div className="searchbar">
            <TextField prefix="Artikelen" placeholder="Zoeken" />
          </div>
        </div>
        <div className="catheader">
          <Heading>Categorieoverzicht</Heading>
          <Text>
            Je hebt onderstaande categorieën aangemaakt. Zit de juiste categorie
            er niet tussen? Bekijk in het vraag & antwoord artikel hoe je een
            categorie aanmaakt. Wijzigingen worden automatisch opgeslagen.
          </Text>
          <Button
            className="instellingen"
            variant="secondary"
            title="Nieuwe subcategorie"
          />
          <Button
            className="instellingen"
            variant="secondary"
            title="Instellingen"
          />
        </div>
        <br />
        <br />
        <div className="empty">
          <EmptyState
            title="Voeg producten toe!"
            message="Deze categorie is nu nog leeg."
          />
        </div>
      </div>
    </div>
  );
}

export default Categorieoverzicht;
