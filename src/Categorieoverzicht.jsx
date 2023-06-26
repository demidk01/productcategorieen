import React, { useState, useEffect } from "react";
import MWWlogo from "./assets/MWW-logo.png";
import Sidebar from "./Sidebar";
import Mickey from "./assets/mickey.jpg";
import Bolcactus from "./assets/Bolcactus.png";
import Tuinhandschoen from "./assets/tuinhandschoen.jpg";
import Tuinmeubel from "./assets/tuinmeubel.jpg";
import Grasmaaier from "./assets/grasmaaier.jpg";
import Tuingereedschap from "./assets/tuingereedschap.jpg";
import {
  FaAngleRight,
  FaAngleDown,
  FaTrashAlt,
  FaPlusCircle,
} from "react-icons/fa";

import {
  Button,
  Heading,
  Text,
  TextField,
  Select,
  Checkbox,
  Modal,
  Toast,
} from "@myonlinestore/bricks";

function Categorieoverzicht({ navigate }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: 1,
      image: Mickey,
      name: "Planten",
      prods: "3",
      subcategories: [
        {
          id: 3,
          image: Bolcactus,
          name: "Cactussen",
          prods: "6",
          sub: "-",
        },
      ],
    },
    {
      id: 2,
      image: Tuinhandschoen,
      name: "Tuinhandschoenen",
      prods: "18",
      subcategories: [],
    },
    {
      id: 4,
      image: Tuinmeubel,
      name: "Tuinmeubels",
      prods: "44",
      subcategories: [],
    },
    {
      id: 5,
      image: Grasmaaier,
      name: "Grasmaaiers",
      prods: "7",
      subcategories: [],
    },
    {
      id: 6,
      image: Tuingereedschap,
      name: "Tuingereedschap",
      prods: "26",
      subcategories: [],
    },
  ];

  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (productId) => {
    if (expandedRow === productId) {
      setExpandedRow(null);
    } else {
      setExpandedRow(productId);
    }
  };

  const handleRowClick = () => {
    navigate("Categorie");
  };

  const options = [
    { label: "Prijs wijzigen", value: "option-a" },
    { label: "Verwijderen", value: "option-b" },
  ];

  const handleSelectChange = (value) => {
    if (value === "option-b") {
      setModalOpen(true);
    }
  };

  const removeCat = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      {" "}
      {showPopup && (
        <Toast
          show="yes"
          severity="success"
          title="Categorie Planten is opgeslagen."
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
          <Heading>Categorieoverzicht</Heading>
          <Text>
            Je hebt onderstaande categorieën aangemaakt. Zit de juiste categorie
            er niet tussen? Bekijk in het vraag & antwoord artikel hoe je een
            categorie aanmaakt. Wijzigingen worden automatisch opgeslagen.
          </Text>
          <Button
            className="instellingen"
            variant="secondary"
            title="Nieuwe categorie"
          />
        </div>
        <br />
        <br />
        <div className="categorieoverzicht">
          <div className="catview">
            <div className="toprow">
              <TextField type="searchbar" className="textsearchbar" />
              <Text> 5 resultaten</Text>
              <Select
                className="selectbar"
                options={options}
                placeholder={
                  <span>
                    Selecteer actie <FaAngleDown />{" "}
                  </span>
                }
                onChange={handleSelectChange}
              />
            </div>
            {modalOpen && (
              <Modal
                size="medium"
                show={modalOpen}
                title="Categorie verwijderen?"
                onClose={closeModal}
              >
                <div className="catremovetext">
                  <Text>
                    Weet je zeker dat je deze categorie wilt verwijderen? Je
                    kunt dit niet ongedaan maken!
                  </Text>
                </div>
                <Button
                  className="toevoegenbutton"
                  title="Verwijderen"
                  variant="destructive"
                />
              </Modal>
            )}
            <table className="table">
              <thead className="thead">
                <tr>
                  <th>
                    <Checkbox />
                  </th>
                  <th></th>
                  <th></th>
                  <th className="table-cellname">Categorie</th>
                  <th className="table-cellprod">Producten</th>
                  <th className="table-cellsub">Subcategorieën</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <React.Fragment key={product.id}>
                    <tr>
                      <td>
                        <Checkbox />
                      </td>
                      <td
                        className="icondropdown"
                        onClick={() => toggleRow(product.id)}
                      >
                        {expandedRow === product.id ? (
                          <FaAngleDown />
                        ) : (
                          <FaAngleRight />
                        )}
                      </td>
                      <td>
                        <img src={product.image} alt={product.name} />
                      </td>
                      <td className="table-cell" onClick={handleRowClick}>
                        {product.name}
                      </td>
                      <td className="table-prod" onClick={handleRowClick}>
                        {product.prods}
                      </td>
                      <td className="table-sub" onClick={handleRowClick}>
                        {product.subcategories.length}
                      </td>
                      <td className="icontrash">
                        <FaPlusCircle />
                        <FaTrashAlt onClick={removeCat} />
                      </td>
                    </tr>
                    {expandedRow === product.id && (
                      <React.Fragment>
                        {product.subcategories.map((subcategory) => (
                          <tr key={subcategory.id}>
                            <td>
                              <Checkbox />
                            </td>
                            <td></td>
                            <td>
                              <img
                                src={subcategory.image}
                                alt={subcategory.name}
                              />
                            </td>
                            <td className="table-cell" onClick={handleRowClick}>
                              {subcategory.name}
                            </td>
                            <td className="table-prod" onClick={handleRowClick}>
                              {subcategory.prods}
                            </td>
                            <td className="table-sub" onClick={handleRowClick}>
                              {subcategory.sub}
                            </td>
                            <td className="icontrash">
                              <FaPlusCircle />
                              <FaTrashAlt />
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorieoverzicht;
