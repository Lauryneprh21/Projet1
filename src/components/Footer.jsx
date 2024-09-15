 
import React from 'react';
import './Footer.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="entemail">
          <a href="mailto:Peartel@agency.com">Peartel@agency.com</a>
        </div>
        
        <div className="enttel">
          <a href="tel:+12345678910"><FontAwesomeIcon icon={faPhone} /> { }
          +1 (234) 567-8910</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
