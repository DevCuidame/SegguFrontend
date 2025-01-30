import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaginaInicialHeader.scss';

const HeaderPaginaInicial = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false); // Nuevo estado para controlar la apertura del menú

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Cambia el estado de apertura del menú
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 1024;

  return (
    <header className="header">
      <div className="logo">
        <img src="./../../assets/logo.png" alt="logo" />
        {isMobile && (
          <picture className="icon-menu" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </picture>
        )}
      </div>

      <nav className={`nav ${isMobile && menuOpen ? 'open' : ''}`}>
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
