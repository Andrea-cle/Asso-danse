import React from "react";
import "./homePage.css";
import Slider from "../../Components/Slider/Slider";

const HomePage = () => {
  const images = [
    "../../public/images/street-jazz.jpg",
    "../../public/images/fitness.jpg",
    "../../public/images/cabaret.jpg",
    "../../public/images/cardio-danse.jpg",
    "../../public/images/pole-danse.jpg",
  ];

  return (
    <section className="home-page">
      <Slider images={images} />

      <h2>Bienvenue à DANSE MARGAUX</h2>
      <h3>AGENDA</h3>
      <p>Prochains évènements à consulter ici</p>
    </section>
  );
};

export default HomePage;
