import React, { useEffect, useState, useRef } from 'react';
import './home.scss';
import HeaderHome from "../../components/headers/HomeHeader";
import FooterPaginaInicial from "../../components/footers/PaginaInicialFooter";

import InsuranceCompoent from './components/Insurance/Insurance';
import DataPerfil from "../perfil/components/DataPerfil";
import AddInsuranceForm from './components/AddInsuranceForm/AddInsuranceForm';
import { useInsuranceService } from '../../services/Insurance.service';

function PaginaHome() {
  const { getInsurance } = useInsuranceService();
  const [insurances, setInsurances] = useState([]);
  const hasFetchedRef = useRef(false);
  

  useEffect(() => {
    const fetchInsuranceData = async () => {
      if (hasFetchedRef.current) return; // Evitar múltiples llamadas
      try {
        hasFetchedRef.current = true;
        const data = await getInsurance();
        setInsurances(data);
      } catch (error) {
        console.error(error.message);
      }
    };
  
    fetchInsuranceData();
  }, [getInsurance]);

  const openAddInsuranceForm = () => {
    const addInsuranceForm = document.querySelector('.add-insurance-form');
    const insuranceForm = document.querySelector('.insurance-form');
    const mainHomr = document.querySelector('.main-home');

    addInsuranceForm.style.display = 'flex';
    mainHomr.style.overflowY = 'hidden';
    insuranceForm.style.height = '90%';
  };

  return (
    <>
      <HeaderHome />

      <main className="main-home">
        <DataPerfil />
          <article className="insurance-cards">
          <div className="title-seguros">
            <h6 className="title">Mis Seguros</h6>
            <button className="edit" onClick={openAddInsuranceForm}>
                  <i className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-patch-plus-fill" viewBox="0 0 18 18">
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0"/>
                    </svg>
                  </i>
                  <span>Agregar seguro</span>
              </button>
          </div>


          <AddInsuranceForm></AddInsuranceForm>
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
