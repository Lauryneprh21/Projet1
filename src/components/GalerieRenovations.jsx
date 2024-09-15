 
import React from 'react';
import './GalerieRenovations.css';

const GalerieRenovations = () => {
  return (
    <section id="creations" className="galerie-container">
      <h2 className="galerie-title">Nos dernières rénovations</h2>
      <div className="galerie-images">
        <div className="image-wrapper">
          <img
            src="https://res.cloudinary.com/des6g45rz/image/upload/v1726143718/5148_fwkby0.jpg"
            alt="Rénovation 1"
            className="galerie-image"
          />
        </div>
        <div className="image-wrapper">
          <img
            src="https://res.cloudinary.com/des6g45rz/image/upload/v1726143447/2150695943_fo6uyf.jpg"
            alt="Rénovation 2"
            className="galerie-image"
          />
        </div>
        <div className="image-wrapper">
          <img
            src="https://res.cloudinary.com/des6g45rz/image/upload/v1726143430/2149385435_ns4ysk.jpg"
            alt="Rénovation 3"
            className="galerie-image"
          />
        </div>
        <div className="image-wrapper">
          <img
            src="https://res.cloudinary.com/des6g45rz/image/upload/v1726143408/132788_h4wq3b.jpg"
            alt="Rénovation 4"
            className="galerie-image"
          />
        </div>
      </div>
    </section>
  );
};

export default GalerieRenovations;
