import React, { useState, useEffect } from "react";
import MWWlogo from "./assets/MWW-logo.png";
import Sidebar from "./Sidebar";
import Mickey from "./assets/mickey.jpg";
import Bolcactus from "./assets/Bolcactus.png";
import Spriet from "./assets/spriet.jpg";

import {
  Button,
  Heading,
  Text,
  EmptyState,
  TextField,
  Modal,
  Checkbox,
  Toast,
} from "@myonlinestore/bricks";

function Nextscreen({ navigate }) {
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const producttoevoegen = () => {
    navigate("Categorie");
  };

  const products = [
    {
      id: 1,
      image: Mickey,
      name: "Mickey",
      price: "€10.00",
    },
    {
      id: 2,
      image: Bolcactus,
      name: "Bolcactus",
      price: "€15.00",
    },
    {
      id: 3,
      image: Spriet,
      name: "Spriet",
      price: "€20.00",
    },
    {
      id: 4,
      image: Mickey,
      name: "Mickey",
      price: "€10.00",
    },
    {
      id: 5,
      image: Bolcactus,
      name: "Bolcactus",
      price: "€15.00",
    },
    {
      id: 6,
      image: Spriet,
      name: "Spriet",
      price: "€20.00",
    },
  ];

  return (
    <div className="App">
      {" "}
      {showPopup && (
        <Toast
          show="yes"
          severity="success"
          title="Categorie Planten is aangemaakt. Je kunt deze nu vullen met producten."
        />
      )}
      <Sidebar logo={MWWlogo} />
      <div className="content">
        <div className="topbar">
          <div className="searchbar">
            <TextField prefix="Artikelen" placeholder="Zoeken" />
          </div>
        </div>
        <div className="catheader">
          <Heading>Planten</Heading>
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
          <Button
            className="catadd"
            title="Producten toevoegen"
            onClick={openModal}
          />
        </div>
      </div>
      {showModal && (
        <Modal
          size="medium"
          show={showModal}
          title="Producten toevoegen"
          onClose={closeModal}
        >
          <div className="ondertekst">
            <Text>Voeg producten toe aan de categorie "Planten"</Text>
            <div className="catselect">
              <TextField prefix="Categorie" />
            </div>
          </div>
          <div className="productentoevoegen">
            <TextField type="searchbar" className="textsearchbar" />
            <table className="table">
              <thead className="thead">
                <tr>
                  <th>
                    <Checkbox />
                  </th>
                  <th></th>
                  <th className="table-cellname">Product</th>
                  <th className="table-cellprice">Prijs</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <img src={product.image} alt={product.name} />
                    </td>
                    <td className="table-cell">{product.name}</td>
                    <td className="table-cellprice">{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button
            className="toevoegenbutton"
            title="Toevoegen"
            variant="primary"
            onClick={producttoevoegen}
          />
        </Modal>
      )}
    </div>
  );
}

export default Nextscreen;
