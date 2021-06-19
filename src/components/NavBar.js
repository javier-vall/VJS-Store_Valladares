import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <ul className="menu-nav">
          <li>
            <a href="./index.html">Inicio</a>
          </li>
          <li>
            <a href="#about">Quienes Somos</a>
          </li>
          <li>
            <a href="#categorias">Categorias</a>
            <ul className="submenu">
              <li>Equipamiento Deportivo</li>
              <li>Maquinas y Home Gym</li>
              <li>Suplementos</li>
            </ul>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </div>
  );
}

export default NavBar;
