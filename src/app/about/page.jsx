import React from 'react';
import './About.css';

export default function AboutPage() {
  return (
    <main className="about-container">
      <section className="about-hero">
        <h1>Sobre Nosotros</h1>
        <p>
          En ARTTHÉA nos apasiona el arte y la tecnología. Nuestra misión es
          conectar artistas con el público a través de experiencias visuales
          únicas y accesibles.
        </p>
      </section>

      <section className="about-content">
        <h2>Nuestra Historia</h2>
        <p>
          ARTTHÉA nació como un proyecto que combina creatividad y tecnología
          para ofrecer una plataforma donde los artistas puedan mostrar sus
          obras, recibir retroalimentación y encontrar nuevas oportunidades.
        </p>

        <h2>Nuestro Equipo</h2>
        <p>
          Contamos con un equipo multidisciplinario compuesto por desarrolladores,
          diseñadores y artistas que trabajan juntos para crear la mejor
          experiencia posible.
        </p>
      </section>
    </main>
  );
}
