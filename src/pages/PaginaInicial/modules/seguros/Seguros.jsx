import ImageLoader from '../../../../components/ImageLoader/ImageLoader';
import './Seguros.scss';

function Seguros() {
    return (
        <article className="seguros">
            <h1 className="title">Nuestros Seguros</h1>

            <section className="seguros-container">
                <SeguroCard 
                    urlImg="/assets/seguros/seguro-soat.jpg"
                    title="SOAT"
                    description="El Seguro Obligatorio de Accidentes de Tránsito (SOAT) cubre los gastos médicos y los daños a terceros en caso de accidentes de tránsito."
                />
                <SeguroCard 
                    urlImg="/assets/seguros/seguro-todo-riesgo.jpg"
                    title="Póliza Todo Riesgo – Auto o Moto"
                    description="Cobertura completa para autos y motos que incluye daños propios, robos, accidentes y más."
                />
                <SeguroCard 
                    urlImg="/assets/seguros/seguro-moto.jpg"
                    title="
                        Póliza Todo Riesgo - Moto"
                    description="Protección integral para motos contra robos, accidentes, daños a terceros y otros imprevistos."
                />
                <SeguroCard 
                    urlImg="/assets/seguros/seguro-hogar.jpg"
                    title="Póliza Hogar"
                    description="Protege tu hogar y tus bienes contra incendios, robos, desastres naturales y otros riesgos."
                />
                <SeguroCard 
                    urlImg="/assets/seguros/seguro-medico.jpg"
                    title="Póliza Responsabilidad Civil Médica"
                    description="Cobertura para profesionales de la salud frente a reclamos por daños a pacientes, incluyendo gastos legales."
                />
            </section>
        </article>
    );
}

export default Seguros;

const SeguroCard = ({ urlImg, title, description, poliza, vigencia, aseguradora }) => {
    return (
        <div className="seguro-card">
            <ImageLoader src={urlImg} alt="img-seguro" className="img-seguro" />
            
            <div className="info">
                <span className="tipo">
                    <h6>Seguro</h6>
                    <h2>{title}</h2>
                </span>

                <p className="descripcion">
                    {description}
                </p>

                <button className="cotizar-btn">
                    Cotizar
                </button>
            </div>
        </div>
    );
};