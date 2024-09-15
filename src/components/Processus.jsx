 
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import './Processus.css';  

const Processus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: false,     
      mirror: true,  
    });
  }, []);

  return (
    <div id="processus" className="processus-container"> { }
           <h2 className="processus-title" data-aos="zoom-in">Notre processus</h2>
      <div className="processus-steps">
        <div className="processus-step" data-aos="fade-up" data-aos-delay="100">
          <h3 className="step-title">Rencontre et accord</h3>
          <p className="step-description">
            Nous commençons par une rencontre pour comprendre vos besoins, vos goûts et définir ensemble les grandes lignes de votre projet de rénovation. Une écoute attentive pour poser les bases d'un projet réussi.
          </p>
        </div>
        <div className="processus-step" data-aos="fade-up" data-aos-delay="200">
          <h3 className="step-title">Idée et concept</h3>
          <p className="step-description">
            Après notre rencontre, nous élaborons un concept personnalisé, combinant vos inspirations et notre expertise. Nous vous présentons des idées créatives sous forme de plans et de visuels pour donner vie à votre projet.
          </p>
        </div>
        <div className="processus-step" data-aos="fade-up" data-aos-delay="300">
          <h3 className="step-title">Concevoir et créer</h3>
          <p className="step-description">
            Notre équipe se charge de concevoir des solutions sur mesure, de la sélection des matériaux à la mise en œuvre des détails architecturaux. Chaque étape est pensée pour respecter vos attentes et votre budget.
          </p>
        </div>
        <div className="processus-step" data-aos="fade-up" data-aos-delay="400">
          <h3 className="step-title">Créer et installer</h3>
          <p className="step-description">
            Nous passons à la réalisation avec un suivi rigoureux des travaux. De l'installation des éléments à la décoration finale, chaque détail est pris en charge pour garantir un résultat à la hauteur de vos rêves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Processus;
