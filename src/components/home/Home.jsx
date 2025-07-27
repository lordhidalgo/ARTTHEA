"use client";

import React from "react";
import Image from "next/image";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-container">
      <div className="home-content">
        <div className="text-block">
          <h1>
            Bienvenido a <span className="brand">ARTTHÉA</span>
          </h1>
          <p>Explora el arte como nunca antes.</p>
        </div>

        <div className="image-block">
          <Image
            src="/img/hojas-sin-fondo.png"
            alt="Arte ilustrado"
            width={300}
            height={300}
            className="home-image"
            priority
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
