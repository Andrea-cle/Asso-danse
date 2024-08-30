import React from "react";
import "./slider.css";
import HomePage from "../HomePage/HomePage";

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
  const altimages = [];

  return (
    <div className="slider">
      {images.map((image, index) => {
        <img key={index} src={image} alt={`slide ${index + 1}`} />;
      })}
    </div>
  );
};

export default Slider;
