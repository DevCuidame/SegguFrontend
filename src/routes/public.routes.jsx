import React from "react";
import { Routes, Route } from "react-router-dom";
import PaginaInicialLayout from "../pages/PaginaInicial/PaginaInicial.layout";
import PaginaHome from "../pages/home/home";
import PaginaPerfil from "../pages/perfil/PaginaPerfil";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/inicio/*" element={<PaginaInicialLayout />} />
      <Route path="/home/*" element={<PaginaHome />} />
      {/* <Route path="/profile/*" element={<PaginaPerfil />} /> */}
    </Routes>
  );
};

export default PublicRoutes;
