import React, { useEffect, useState } from 'react';
import './home.scss';
import HeaderHome from "../../components/headers/HomeHeader";
import FooterPaginaInicial from "../../components/footers/PaginaInicialFooter";

import InsuranceCompoent from './components/Insurance';
import DataPerfil from "../perfil/components/DataPerfil";
import { useInsuranceService } from '../../services/Insurance.service';

function PaginaHome() {
  const { getInsurance } = useInsuranceService();
  const [insurances, setInsurances] = useState([]);

  useEffect(() => {
      const fetchInsuranceData = async () => {
          try {
              const data = await getInsurance();
              setInsurances(data);
          } catch (error) {
              console.error(error.message);
          }
      };
  
      fetchInsuranceData();
  }, [ getInsurance ]); // Agrega un array de dependencias vacío para que se ejecute solo una vez


  return (
    <>
      <HeaderHome />

      <main className="main-home">
        <DataPerfil />
        <article className="insurance-cards">
        <h6 className="title-seguros">Mis Seguros</h6>

        {insurances.map((insurance, index)  => {
          return <InsuranceCompoent key={index} insurance={insurance} />;
        })}
        </article>
      </main>

      <FooterPaginaInicial />
    </>
  );
}

export default PaginaHome;
