import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaginaInicialHeader.scss';

const HeaderPaginaInicial = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo"><img src="./../../assets/logo.png" alt="logo" /></div>
      <nav className="nav">
        <ul>
          <li onClick={() => navigate('/inicio')}><h5>Inicio</h5></li>
          <li onClick={() => navigate('/inicio/who')}><h5>Quienes Somos</h5></li>
          <li onClick={() => navigate('/inicio/insurances')}><h5>Nuestros Seguros</h5></li>
          <li onClick={() => navigate('/inicio/contact')}><h5>Contacto</h5></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPaginaInicial;