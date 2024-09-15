 
import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [message, setMessage] = useState('');  

  
  const handleSubmit = () => {
    setMessage('Un email vous a été envoyé. Un conseiller reviendra vers vous prochainement.');  
  };

  return (
    <div id="contact" className="contact-section"> { }
      <div className="contact-grid">
        <div className="contact-form">
          <h3>Menez à bien votre projet</h3>
          <p>Remplissez le formulaire pour échanger avec nos experts.</p>
          <input
            type="email"
            placeholder="Entrez une adresse e-mail valide"
            className="email-input"
          />
          <button className="submit-button" onClick={handleSubmit}> { }
            SOUMETTRE
          </button>
          {message && <p className="submit-message">{message}</p>} { }
        </div>
        <div className="contact-whatsapp">
          <img 
            src="https://res.cloudinary.com/des6g45rz/image/upload/v1726156028/whatsapp_ar2s5d.png" 
            alt="WhatsApp" 
            className="whatsapp-icon" 
          />
          <h3>À l'étranger ? Nous sommes aussi sur Whatsapp !</h3>
          <p>
            Ajoutez-nous sur WhatsApp et envoyez des requêtes pour une réponse instantanée.
          </p>
          <div className="whatsapp-contact">
            <button className="whatsapp-button">+1 (234) 567-8910</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
