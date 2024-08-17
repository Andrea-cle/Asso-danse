//Configure la structure de l'application en intégrant le routage pour naviguer entre les différentes pageset ajouter des ajouter des composants communs
// import { useState } from "react";
// import Us from "../Us/Us";
import Header from "../Header/Header";
// import HomePage from"../HomePage/HomePage";
// import Faq from "../Faq/Faq";
// import Navbar from "../Navbar/Navbar";
// import Agenda from "../Agenda/Agenda";
// import Fonctionnement from "../Fonctionnement/Fonctionnement";
// import Petillantes from "../Petillantes/Petillantes";

const App = () => {
  return (
    <>
      <div className="app">
        <header />
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/us" element={<Us />} />
          <Route path="/fonctionnement" element={<Fonctionement />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/les-petillantes" element={<Les pétillantes />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
