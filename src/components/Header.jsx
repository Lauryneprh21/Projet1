 
import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/des6g45rz/image/upload/v1725908081/Logo_r6tfup.jpg"
          alt="Logo"
        />
      </div>
      <button className="burger-button" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>Qui sommes-nous ?</Link></li>
          <li><Link to="concept" smooth={true} duration={500}>Notre concept</Link></li>
          <li><Link to="creations" smooth={true} duration={500}>Nos créations</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
