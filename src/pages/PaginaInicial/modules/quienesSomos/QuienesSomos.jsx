import React from 'react';
import { Link } from 'react-router-dom';
import './QuienesSomos.scss';

const QuienesSomos = () => {

  return (
    <article className="quienes-somos">
      <section className="text-section">
        <p>
          Somos una plataforma digital, donde organizamos
          toda tu información de seguros. Accede fácilmente
          a tus documentos, pólizas y cotizaciones para
          futuros aseguramientos, todo en un solo lugar.
          Nuestra plataforma es segura y fácil de usar,
          ofreciéndote acceso inmediato y control total
          sobre la información que necesitas para proteger lo
          que más valoras.
        </p>
      </section>

      <section className="imagenes">
        <img src="../../../assets/pagInicial-img-1.jpg" alt="Familia feliz" className="circular-image" />
      </section>

      <section className="logos">
        <img src="/assets/logos/mapfre-seguros-logo.png" alt="mapfre" className="mapfre" />
        <img src="/assets/logos/sura-logo.png" alt="sura" className="sura" />
        <img src="/assets/logos/equidad-logo.png" alt="equidad" className="equidad" />
      </section>
    </article>
  );
};

export default QuienesSomos;
