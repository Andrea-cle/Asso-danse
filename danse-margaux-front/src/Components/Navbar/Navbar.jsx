import React from "react";
import { link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <link to="/" />
          Accueil
        </li>
        <li>
          <link to="/about" />A propos{" "}
        </li>
        <li>
          <link to="/cours" />
          Les cours
        </li>
        <li>
          <link to="/function" />
          Fonctionnement
        </li>
        <li>
          <link to="/faq" />
          FAQ
        </li>
        <li>
          <link to="/petillantes" />
          Les Pétillantes
        </li>
        <li>
          <link to="/nous" />
          Qui sommes nous ?
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
