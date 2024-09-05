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
    </section>
  );
};

export default HomePage;
