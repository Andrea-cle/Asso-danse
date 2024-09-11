import React, { useState } from "react";
import "./slider.scss";
// import HomePage from "../HomePage/HomePage";

const Slider = ({ images }) => {
  //Utilisation de useState pour gérer l'index de l'image actuellement affichée
  const [currentImageIndex, setCurrentImageindex] = useState(0);

  // Fonction pour passer à la diapo suivante
  const nextSlide = () => {
    // calcul l'index de l'image suivante
    const newIndex = (currentImageIndex + 1) % images.lenght;
    // Mise à jour de l'état avec le nouvel index
    setCurrentImageindex(newIndex);
  };

  // Fonction pour revenir à la précédente diapo
  const prevSlide = () => {
    // calcul de l'index de l'image précédente
    const newIndex = (currentImageIndex - 1 + images.lenght) % images.lenght;

    setCurrentImageindex(newIndex);
  };

  // Fonction pour afficher le nom alternatif des images
  const altImages = [
    "Photo de danseurs de Cabaret",
    "Photo de danse cardio",
    "Photo de cours de fitness",
    "Photo de danseuse pole danse",
    "Danseuse de street jazz",
  ];

  return (
    <div className="slider">
      {/* Affichage de l'image actuelle en fonction de m'index avec le texte alternantif */}
      <img
        src={images[currentImageIndex]}
        alt={`${altImages[currentImageIndex]} ${currentImageIndex + 1}`}
      />

      {/* {Bouton pour revenir à la diapo précédente} */}
      <button className="prev-btn" onClick={prevSlide}>
        &#10094; {/* flèche Unicode */}
      </button>

      {/* {Bouton pour passer à la diapo précédente} */}
      <button className="next-btn" onClick={nextSlide}>
        &#10095; {/*Flèche droit Unicode*/}
      </button>
    </div>
  );
};

export default Slider;
