import React, { useState } from "react";
import MWWlogo from "./assets/MWW-logo.png";
import Sidebar from "./Sidebar";
import Mickey from "./assets/mickey.jpg";
import Bolcactus from "./assets/Bolcactus.png";
import { FaAngleRight, FaAngleDown, FaTrashAlt } from "react-icons/fa";

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
      subcategories: [
        {
          id: 3,
          image: Bolcactus,
          name: "Cactussen",
          prods: "6",
          sub: "0",
        },
      ],
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
              <Text> 1 resultaat</Text>
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
                      <td className="table-cell">{product.name}</td>
                      <td className="table-prod">{product.prods}</td>
                      <td className="table-sub">
                        {product.subcategories.length}
                      </td>
                      <td className="icontrash">
                        <FaTrashAlt />
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
                            <td className="table-cell">{subcategory.name}</td>
                            <td className="table-prod">{subcategory.prods}</td>
                            <td className="table-sub">{subcategory.sub}</td>
                            <td className="icontrash">
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
