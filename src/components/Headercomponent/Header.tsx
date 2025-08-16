"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import './Header.css';
import '../../app/globals.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Logo a la izquierda */}
      <Link href="/" className="logo">
        <img src="/img/logo-artthea.png" alt="Logo ARTTHÉA" className="logo-img" />
      </Link>

      {/* Menú al centro */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link href="#inicio">Galería de arte</Link>
        <Link href="/about">Sobre nosotros</Link>
        <Link href="#soporte">Soporte</Link>
        <Link href="/PaginaMembresia">Membresía</Link>
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
