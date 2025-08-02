"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./Home.css";
import Footer from "../FooterComponent/Footer";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        {question}
        <span className="faq-arrow">{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const Home = () => {
  return (
    <>
      <main className="home-container">
        <div className="home-content">
          <div className="text-block">
            <h1>
              Bienvenido a{" "}
              <span className="brand">
                <span className="brand-ar">AR</span>
                <span className="brand-t">T</span>
                <span className="brand-thea">HEA</span>
              </span>
            </h1>
            <p>Explora el arte como nunca antes.</p>
            <button className="member-btn">Hazte miembro</button>
          </div>

          <div className="image-block">
            <Image
              src="/img/flores-amarillas.jpg"
              alt="Arte de flores amarillas"
              width={300}
              height={300}
              className="home-image"
              priority
            />
          </div>
        </div>
      </main>
      <hr />
      <section className="home-section">
        <h2>Crea tu portafolio artístico </h2>
        <p>Muestra tus obras y conecta con otros artistas.</p>
        <button className="portfolio-btn">Publica tu primera obra</button>
      </section>

      <div className="home-incentives">
        <h2>Ayudando a la comunidad artística global</h2>
        <div className="incentives-grid">
          <div className="incentives-col">
            <div className="incentive-card">
              <h4 className="incentive1">Apoyo a artistas emergentes</h4>
              <p>
                ARTTHÉA es una plataforma que conecta artistas y amantes del
                arte de todo el mundo. Únete a nosotros para compartir,
                descubrir y celebrar el arte.
              </p>
            </div>
            <div className="incentive-card">
              <h4 className="incentive2">Impacto social</h4>
              <p>
                Nuestro compromiso es apoyar a artistas emergentes y promover la
                diversidad cultural. Creemos en el poder del arte para
                transformar comunidades y crear un mundo más inclusivo.
              </p>
            </div>
          </div>
          <div className="incentives-col">
            <div className="incentive-card">
              <h4 className="incentive3">Promocion de arte</h4>
              <p>
                Creemos en la importancia de dar visibilidad a los artistas y
                sus obras. A través de nuestras iniciativas, buscamos promover
                el arte en todas sus formas y conectar a los creadores con un
                público más amplio.
              </p>
            </div>
            <div className="incentive-card">
              <h4 className="incentive4">Subastas de arte</h4>
              <p>
                Nuestras subastas de arte ofrecen a los artistas una plataforma
                para vender sus obras y obtener reconocimiento. Apoyamos a los
                creadores en cada paso del proceso.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <section className="home-frequent-questions">
        <div className="faq-flex">
          <div className="faq-info">
            <div>
              <h2>Preguntas frecuentes</h2>
              <h5>
                Nuestra comunidad artística es una plataforma social para
                artistas que desean compartir, publicar y debatir sobre arte y
                obras creativas. Es gratuita y solo necesitas registrar tu
                correo electrónico para crear tu perfil.
              </h5>
            </div>
          </div>
          <div className="faq-list">
            <FAQItem
              question="¿Cómo puedo unirme a ARTTHÉA?"
              answer="Puedes unirte a ARTTHÉA creando una cuenta gratuita en nuestra plataforma. Una vez registrado, podrás explorar, compartir y vender tus obras de arte."
            />
            <FAQItem
              question="¿Puedo vender mis obras en ARTTHÉA?"
              answer="Sí, puedes publicar y vender tus obras de arte a través de nuestra plataforma de manera sencilla y segura."
            />
            <FAQItem
              question="¿Hay algún costo para los artistas?"
              answer="Registrarse y crear un portafolio es gratuito. Solo se aplican comisiones cuando vendes una obra."
            />
            <FAQItem
              question="¿Cómo puedo participar en las subastas?"
              answer="Para participar en las subastas, solo necesitas tener una cuenta activa y seguir las instrucciones en la sección de subastas."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
