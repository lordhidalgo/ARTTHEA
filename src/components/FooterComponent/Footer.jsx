import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="home-footer">
    <div className="footer-top">
      <div>
        <strong>ARTTHÉAcomunity</strong>
        <div className="footer-desc">Una comunidad global de artistas</div>
      </div>
      <nav className="footer-links">
        <a href="#">Escríbenos</a>
        <a href="#">Normas de la Comunidad</a>
        <a href="#">Términos de Servicio</a>
        <a href="#">Política de Privacidad</a>
        <a href="#">Política de Devolución</a>
      </nav>
      <div className="footer-social">
        <a href="#" aria-label="Facebook">Facebook</a>
        <a href="#" aria-label="Instagram">Instagram</a>
        <a href="#" aria-label="Twitter">Twitter</a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2025 ARTTHÉA - Todos los derechos reservados.</span>
    </div>
  </footer>
);

export default Footer;
