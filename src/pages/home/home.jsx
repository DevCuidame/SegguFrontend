import React, { useEffect } from "react";
import './home.scss';
import HeaderHome from "../../components/headers/HomeHeader";
import FooterPaginaInicial from "../../components/footers/PaginaInicialFooter";

import InsuranceCompoent from './components/Insurance';
import DataPerfil from "../perfil/components/DataPerfil";
import { isAuthenticated, authFetch } from "../../services/AuthUser.service"; 

function PaginaHome() {
  useEffect(() => {
    // Ejemplo: Verificar si el usuario está autenticado
    const authenticateUser = async () => {
      try {
        const isAuthenticated = await isAuthenticated();
        if (!isAuthenticated) {
          window.location.href = '/login'; // Redirigir si no está autenticado
        }
      } catch (error) {
        console.error("Error al verificar la autenticación:", error);
      }
    };

    // Ejemplo: Obtener datos del usuario
    const fetchData = async () => {
      try {
        const userData = await authFetch();
        console.log("Datos del usuario:", userData); // Reemplaza esto por lógica real
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
      }
    };

    authenticateUser();
    fetchData();
  }, []);

  return (
    <>
      <HeaderHome />

      <main className="main-home">
        <DataPerfil />
        <article className="insurance-cards">
          <h6 className="title-seguros">Mis Seguros</h6>
          <InsuranceCompoent insurance_id="{}" />
        </article>
      </main>

      <FooterPaginaInicial />
    </>
  );
}

export default PaginaHome;
