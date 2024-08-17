// HEADER inclut également le menu burger
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">Danse Margaux</div>
        <nav className={isOpen ? "nav-open" : ""}>
          <ul>
            <li>
              <link to="/nous" />
              Nous
            </li>
            <li>
              <link to="/cours" />
              Cours proposés
            </li>
            <li>
              <link to="/fonctionnement" />
              Fonctionement de l'association
            </li>
            <li>
              <link to="/faq" />
              FAQ
            </li>
            <li>
              <link to="/petillantes" />
              Les Pétillantes
            </li>
          </ul>
        </nav>
        <div className="burger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
