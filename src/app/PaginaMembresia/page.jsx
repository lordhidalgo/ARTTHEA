"use client";
import "./membresia.css";
import React, { useState } from 'react';
import Link from 'next/link';
import '../../app/globals.css';


export default function PaginaMembresia() {
  return (
    <div className="membresia-container">
      <h1 className="titulo">Planes de Membresía</h1>
      <div className="membresias">
        <div className="membresia-card">
          <h2>Membresía Semanal</h2>
          <p>Acceso por 7 días con todos los beneficios estándar. Ideal para probar la plataforma.</p>
        </div>
        <div className="membresia-card">
          <h2>Membresía Mensual</h2>
          <p>Acceso completo durante 30 días. Perfecta para usuarios regulares.</p>
        </div>
        <div className="membresia-card">
          <h2>Membresía Anual</h2>
          <p>Acceso ilimitado por 12 meses a todas las funciones y contenido premium.</p>
        </div>
      </div>
    </div>
  );
}

