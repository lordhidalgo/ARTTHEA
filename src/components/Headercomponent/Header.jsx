"use client";

import React, { useState } from 'react';
import Button from '@mui/material/Button';

import './Header.css';
import '../../styles.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Logo a la izquierda */}
      <div className="logo">
        <img src="/img/logo-artthea.png" alt="Logo ARTTHÉA" className="logo-img" />
      </div>

      {/* Menú al centro */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="#inicio">Galería de arte</a>
        <a href="#obras">Sobre nosotros</a>
        <a href="#historia">Soporte</a>
        <a href="#artistas">Membresía</a>
      </nav>

      {/* Botones a la derecha */}
      <div className="header-right">
        <button className="register-btn">Registrarse</button>
        <button className="login-btn">Iniciar sesión</button>
      </div>

      {/* Icono del menú para móviles */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
