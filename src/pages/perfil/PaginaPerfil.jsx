import React from "react";
import './PaginaPerfil.scss';
import HeaderHome from "../../components/headers/HomeHeader";
import FooterPaginaInicial from "../../components/footers/PaginaInicialFooter";

import ReviewsCard from "./components/ReviewsCard";
import DataPerfil from "./components/DataPerfil";

const PaginaPerfil = () => {

  

  return (
    <>
      <HeaderHome />

      <main className="main-perfil">

        <DataPerfil/>

        <article className="informacion-perfil">
          <section className="info-container">
            <h1 className="nombre">Sofía Ayala</h1>

            <div className="info">
              <div>
                <span className="cc">
                  <h3>Identificación:</h3>
                  <h4>131231331312</h4>
                </span>

                <span className="enmail">
                  <h3>E-mail:</h3>
                  <h4>asofia@cuidame.tech</h4>
                </span>

                <span className="telefono">
                  <h3>Telefono:</h3>
                  <h4>3152332133</h4>
                </span>
              </div>
              <div>
                <span className="fecha-nacimiento">
                  <h3>Fecha de Nacimiento:</h3>
                  <h4>10/01/1990</h4>
                </span>

                <span className="empresa">
                  <h3>Empresa:</h3>
                  <h4>Cuidame Tech</h4>
                </span>
              </div>
            </div>
          </section>

          {/*Carrucel de reseñas hechas por usuarios*/}
          <section className="reviews">
            <ReviewsCard/>
            <ReviewsCard/>
            <ReviewsCard/>
            <ReviewsCard/>
          </section>
        </article>
      </main>
      
      <FooterPaginaInicial />
    </>
  );
};

export default PaginaPerfil;
