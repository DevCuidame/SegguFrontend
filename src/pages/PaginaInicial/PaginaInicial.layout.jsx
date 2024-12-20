import React from "react";
import { Routes, Route } from "react-router-dom";
import './PaginaInicial.layout.scss';

import HeaderPaginaInicial from "../../components/headers/PaginaInicialHeader";
import FooterPaginaInicial from "../../components/footers/PaginaInicialFooter";

// Modulos
import Login from "./modules/login/login";
import Inicio from "./modules/inicio/Inicio";
import Contacto from "./modules/contacto/Contacto";
import QuienesSomos from "./modules/quienesSomos/QuienesSomos";
import Seguros from "./modules/seguros/Seguros";

const PaginaInicialLayout = () => {
  return (
    <>
      <HeaderPaginaInicial />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contacto />} />
          <Route path="who" element={<QuienesSomos />} />
          <Route path="insurances" element={<Seguros />} />
        </Routes>
      </main>

      <FooterPaginaInicial />
    </>
  );
};

export default PaginaInicialLayout;
