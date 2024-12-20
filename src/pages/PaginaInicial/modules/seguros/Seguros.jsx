import './Seguros.scss'

function Seguros () {
    return(
        <article className="seguros">
            <h1 className="title">Nuestros Seguros</h1>

            <section className="seguros-container">
                <SeguroCard 
                    urlImg="/assets/seguros/seguro-todo-riesgo.jpg"
                    title="Todo Riesgo"
                    description="El seguro todo riesgo para carros y
                                motos ofrece una cobertura completa
                                que te protege contra daños propios y
                                terceros, incluyendo accidentes, robos y
                                vandalismo. Es una opción ideal para
                                una protección integral del vehículo."
                />
                <SeguroCard 
                    urlImg="/assets/seguros/seguro-hogar.jpg"
                    title="Hogar"
                    description="El para tu hogar ofrece una protección
                                completa contra daños por accidentes,
                                robos, incendios y otros imprevistos
                                que puedan afectar la vivienda y sus
                                bienes. Es ideal para asegurar tanto la
                                estructura del hogar como las
                                pertenencias personales en su interior."
                />
                <SeguroCard 
                    urlImg="/assets/seguros/seguro-medico.jpg"
                    title="Responsabilidad Civil Médica"
                    description="El seguro de responsabilidad civil
                                médica cubre a profesionales de la
                                salud frente a reclamos por daños a
                                pacientes, incluyendo gastos legales y
                                compensaciones por posibles errores."
                />   
                <SeguroCard 
                    urlImg="/assets/seguros/seguro-copropiedad.jpg"
                    title="Copropiedades"
                    description="El seguro de copropiedades protege
                                áreas comunes y estructuras de
                                edificios residenciales ante riesgos
                                como incendios, robos o daños por
                                desastres naturales, asegurando la
                                seguridad de los espacios compartidos."
                />            
            </section>
        </article>
    );
}

export default Seguros;

const SeguroCard = ({urlImg, title, description}) => {
    return(
        <div className="seguro-card">
            <img src={urlImg} alt="img-seguro"/>
            
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
}