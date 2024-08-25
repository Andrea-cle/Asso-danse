import React from "react";

const Slider = () => {
  return (
    <div className="slider">
      {images.map((image, index) => {
        <img key={index} src={image} alt={`slide ${index + 1}`} />;
      })}
    </div>
  );
};

export default Slider;
