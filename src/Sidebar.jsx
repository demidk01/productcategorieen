import React from "react";

function Sidebar({ logo }) {
  return (
    <div className="sidebar">
      <div className="MWW-logo">
        <img src={logo} alt="MWW Logo" />
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
  );
}

export default Sidebar;
