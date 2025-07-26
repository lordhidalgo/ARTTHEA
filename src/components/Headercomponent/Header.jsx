"use client";

import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <span>ARTTHÉA</span>
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="#inicio">Galeria de arte</a>
        <a href="#obras">Sobre nosotros</a>
        <a href="#historia">Soporte</a>
        <a href="#artistas">Membresias</a>
        <button className="upload-btn">Sube tu obra</button>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
