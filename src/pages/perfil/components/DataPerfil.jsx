import React, { useEffect, useState } from 'react';
import { usePerfilService } from '../../../services/Perfil.service';
import './DataPerfil.scss'

function DataPerfil() {
    const [perfil, setPerfil] = useState([]);
    const { getPerfilInfo } = usePerfilService();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getPerfilInfo();
            setPerfil(data);
          } catch (error) {
            console.error(error.message);
          }
        };

        fetchData();
    });

    return (
        <article className="data-perfil">
            <div className="filter-bg">
            </div>

            <img src="/assets/perfil-bg.jpg" alt="bg" className="bg" />

            <section className="img-perfil">
                <img src="/assets/perfil.jpg" alt="perfil-foto" />

                <div className="hola">
                    <h6>¡Hola!</h6>
                    <h5>{perfil.username}</h5>
                </div>
            </section>
            <section className="info">
                <h3 className="name">{perfil.name} {perfil.lastname}</h3>
                <h4 className="role">{perfil.role}</h4>
                <h4 className="company">{perfil.company}</h4>

                <div className="location">
                    <i className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-crosshair" viewBox="0 0 18 18">
                            <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7 7 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7 7 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7 7 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7 7 0 0 0 8.5 1.018zm-6.48 7A6 6 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6 6 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6 6 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6 6 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                        </svg>
                    </i>
                    <span>{perfil.locate}</span>
                </div>

                <button className="edit">
                    <i className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil" viewBox="0 0 18 18">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                        </svg>
                    </i>
                    <span>Editar perfil</span>
                </button>
            </section>
        </article>
    );
}

export default DataPerfil;