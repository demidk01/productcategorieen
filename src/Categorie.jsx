import React, { useState } from "react";
import MWWlogo from "./assets/MWW-logo.png";
import Sidebar from "./Sidebar";
import Mickey from "./assets/mickey.jpg";
import Bolcactus from "./assets/Bolcactus.png";
import Spriet from "./assets/spriet.jpg";

import {
  Button,
  Heading,
  TextField,
  Checkbox,
  Select,
} from "@myonlinestore/bricks";

function Categorie({ navigate }) {
  const categorieopslaan = () => {
    navigate("Categorieoverzicht");
  };

  const products = [
    {
      id: 1,
      image: Mickey,
      name: "Mickey",
      stock: "3",
      price: "€10.00",
    },
    {
      id: 2,
      image: Bolcactus,
      name: "Bolcactus",
      stock: "3",
      price: "€15.00",
    },
    {
      id: 3,
      image: Spriet,
      name: "Spriet",
      stock: "3",
      price: "€20.00",
    },
  ];

  const options = [
    { label: "Prijs wijzigen", value: "option-a" },
    { label: "Verwijderen", value: "option-b" },
  ];

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
          <Heading>Planten</Heading>
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
        <div className="categoriebeheer">
          <div className="toprow">
            <TextField type="searchbar" className="textsearchbar" />
            <Select className="selectbar" options={options} />
          </div>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>
                  <Checkbox />
                </th>
                <th></th>
                <th className="table-cellname">Product</th>
                <th className="table-cellstock">Voorraad</th>
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
                  <td className="table-stock">{product.stock}</td>
                  <td className="table-cellprice">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button
            className="producttoevoegenadd"
            variant="secondary"
            title="Product toevoegen"
          />
        </div>
        <Button
          className="opslaanbutton"
          title="Opslaan"
          variant="primary"
          onClick={categorieopslaan}
        />
      </div>
    </div>
  );
}

export default Categorie;
