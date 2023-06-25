import React, { useState } from "react";
import MWWlogo from "./assets/MWW-logo.png";
import Sidebar from "./Sidebar";

import {
  Button,
  Heading,
  Text,
  EmptyState,
  TextField,
  Modal,
} from "@myonlinestore/bricks";

function Homescreen({ navigate }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const categorietoevoegen = () => {
    navigate("Nextscreen");
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

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
          <Heading>Categorieën</Heading>
          <Text>
            Je hebt onderstaande categorieën aangemaakt. Zit de juiste categorie
            er niet tussen? Bekijk in het vraag & antwoord artikel hoe je een
            categorie aanmaakt. Wijzigingen worden automatisch opgeslagen.
          </Text>
        </div>
        <br />
        <br />
        <div className="empty">
          <EmptyState
            title="Tijd voor je eerste categorie!"
            message="Maak het beheren van groepen producten makkelijker."
          />
          <Button
            onClick={openModal}
            className="catadd"
            title="Categorie toevoegen"
          />
        </div>
      </div>

      {showModal && (
        <Modal
          size="medium"
          show={showModal}
          title="Categorie toevoegen"
          onClose={closeModal}
        >
          <div className="ondertekst">
            <Text>
              Geef je categorie een naam en (eventueel) een afbeelding. Deze
              vind je terug in het categorieoverzicht.
            </Text>
          </div>
          <div className="nameinput">
            <Text className="namefield">Naam</Text>
            <TextField className="textfield" placeholder="Typ hier tekst" />
          </div>
          <div className="imageinput">
            <Text className="namefield">Afbeelding</Text>
            <div className="preview-image"></div>
            <input
              className="imagefield"
              type="file"
              onChange={handleFileInputChange}
            />
            {selectedFile && (
              <div>
                <Text>{`Geselecteerde afbeelding: ${selectedFile.name}`}</Text>
                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="preview-image"
                  />
                )}
              </div>
            )}
          </div>

          <Button
            className="toevoegenbutton"
            title="Toevoegen"
            variant="primary"
            onClick={categorietoevoegen}
          />
        </Modal>
      )}
    </div>
  );
}

export default Homescreen;
