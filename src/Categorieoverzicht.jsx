import React, { useState } from "react";
import MWWlogo from "./assets/MWW-logo.png";
import Sidebar from "./Sidebar";
import Mickey from "./assets/mickey.jpg";
import { FaAngleRight } from "react-icons/fa";

import {
  Button,
  Heading,
  Text,
  TextField,
  Select,
  Checkbox,
} from "@myonlinestore/bricks";

function Categorieoverzicht({ navigate }) {
  const products = [
    {
      id: 1,
      image: Mickey,
      name: "Planten",
      prods: "3",
      sub: "0",
    },
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
        </div>
        <br />
        <br />
        <div className="categorieoverzicht">
          <div className="catview">
            <div className="toprow">
              <TextField type="searchbar" className="textsearchbar" />
              <Select className="selectbar" disabled="yes" />
            </div>
            <table className="table">
              <thead className="thead">
                <tr>
                  <th>
                    <Checkbox />
                  </th>
                  <th></th>
                  <th></th>
                  <th className="table-cellname">Categorie</th>
                  <th className="table-cellprod">Aantal producten</th>
                  <th className="table-cellsub">Aantal subcategorieën</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      {" "}
                      <FaAngleRight />
                    </td>
                    <td>
                      <img src={product.image} alt={product.name} />
                    </td>
                    <td className="table-cell">{product.name}</td>
                    <td className="table-stock">{product.prods}</td>
                    <td className="table-cellprice">{product.sub}</td>
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
        </div>
      </div>
    </div>
  );
}

export default Categorieoverzicht;
