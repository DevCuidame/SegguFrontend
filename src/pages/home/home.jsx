import React from "react";
import './home.scss';
import HeaderHome from "../../components/headers/HomeHeader";
import FooterPaginaInicial from "../../components/footers/PaginaInicialFooter";

import InsuranceCompoent from './components/Insurance'
import DataPerfil from "../perfil/components/DataPerfil";

function PaginaHome() {

  return (
    <>
      <HeaderHome />

      <main className="main-home">

        <DataPerfil></DataPerfil>

        <article className="insurance-cards">
          <h6 className="title-seguros">Mis Seguros</h6>

          <InsuranceCompoent insurance_id="{}"></InsuranceCompoent>
        </article>
      </main>
      
      <FooterPaginaInicial />
    </>
  );
};

export default PaginaHome;
