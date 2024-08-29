//Configure la structure de l'application en intégrant le routage pour naviguer entre les différentes pageset ajouter des ajouter des composants communs
import { useState } from "react";
import UsPage from "../UsPage/UsPage";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import FaqSection from "../FaqSection/FaqSection";
import Navbar from "../Navbar/Navbar";
import Calendar from "../Calendar/Calendar";
import FunctioningPage from "../FunctioningPage/FunctioningPage";
import Petillantes from "../Petillantes/Petillantes";

const App = () => {
  return (
    <>
      <div className="app">
        <header />
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/Calendar" element={<Agenda />} />
          <Route path="/UsPage" element={<UsPage />} />
          <Route path="/FunctioningPage" element={<FunctioningPage />} />
          <Route path="/FaqSection" element={<FaqSection />} />
          <Route path="/les-petillantes" element={<LesPetillantes />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
