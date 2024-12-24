import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthService } from '../../services/AuthUser.service';
import './HomeHeader.scss';

const HeaderHome = () => {
  const navigate = useNavigate();
  const { logout } = useAuthService(); 
  
  const handleLogOut = async () => {
      await logout(); 
      navigate('/inicio');
  };
  
  
  return (
    <header className="home-header">
      <div className="logo">
        <img src={"./../../assets/logo.png"} alt="SEGGU"/>
      </div>

      <div className="search-bar">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </button>
        <input type="text"/>
      </div>

      <nav className="header-nav">
        <a href="#">Mi Solicitudes</a>
        <Link to="/home">Mis Seguros</Link>
      </nav>

      <button className="notifications">
        {/*Cuando se trabaje las notificaciones se puede hacer que cuando tenga nuevas notificaciones cambiar el icono por "bell-fill */}
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-bell" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
        </svg>
      </button>

      <details className="perfil-option">
        <summary>
          <img className="profile-img" src={"/assets/perfil.jpg"} alt="Foto de perfil" />
        </summary>

        <ul>
          <li>Ver perfil</li>
          <li>Mensaje</li>
          <li>Mis seguros</li>
          <li>Recomendados</li>
          <hr />
          <li>Ayuda</li>
          <li  onClick={handleLogOut}>Salir</li>
        </ul>
      </details>
    </header>
  );
};

export default HeaderHome;
