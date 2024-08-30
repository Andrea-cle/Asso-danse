import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" />
          Accueil
        </li>
        <li>
          <Link to="/about" />A propos{" "}
        </li>
        <li>
          <Link to="/cours" />
          Les cours
        </li>
        <li>
          <Link to="/function" />
          Fonctionnement
        </li>
        <li>
          <Link to="/faq" />
          FAQ
        </li>
        <li>
          <Link to="/petillantes" />
          Les Pétillantes
        </li>
        <li>
          <Link to="/nous" />
          Qui sommes nous ?
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
