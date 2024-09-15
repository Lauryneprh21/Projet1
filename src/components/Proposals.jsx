 
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import './Proposals.css';

const Proposals = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <section id="concept" className="proposals-section"> { }
      <div className="proposals-grid">
        <div className="proposals-image" data-aos="fade-up">
          <img 
            src="https://res.cloudinary.com/des6g45rz/image/upload/v1725912826/pikaso_texttoimage_modern-pouf-bohemian-sale-_izgfug.jpg" 
            alt="Propositions" 
          />
        </div>
        <div className="proposals-content" data-aos="fade-up" data-aos-delay="200">
          <h3>Ce que nous proposons</h3>
          <p>
            Découvrez comment nous transformons vos espaces en combinant créativité, fonctionnalité et durabilité. 
            Notre approche unique de la rénovation et du design met en avant des solutions sur-mesure, alliant esthétisme bohème et modernité.
          </p>
          <ul>
            <li>✓ Design Personnalisé</li>
            <li>✓ Style Unique</li>
            <li>✓ Matériaux Durables</li>
            <li>✓ Expertise Créative</li>
            <li>✓ Accompagnement Complet</li>
          </ul>
          <button className="proposals-button">PARCOUREZ NOS DESIGNS</button>
        </div>
      </div>
    </section>
  );
};

export default Proposals;
