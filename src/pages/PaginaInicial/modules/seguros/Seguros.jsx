import './Seguros.scss'

function Seguros () {
    return(
        <article className="seguros">
            <h1 className="title">Nuestros Seguros</h1>

            <section className="seguros-container">
                <SeguroCard />
                <SeguroCard />
                <SeguroCard />
                <SeguroCard />
                <SeguroCard />
                <SeguroCard />
                <SeguroCard />
                <SeguroCard />
                <SeguroCard />
                <SeguroCard />
                <SeguroCard />
            </section>
        </article>
    );
}

export default Seguros;

const SeguroCard = () => {
    return(
        <div className="seguro-card">
            <img src="/assets/login-img-1.jpg" alt="img-seguro"/>
            
            <div className="info">
                <span className="tipo">
                    <h6>Seguro</h6>
                    <h2>Todo Riesgo</h2>
                </span>

                <p className="descripcion">
                    El seguro todo riesgo para carros y
                    motos ofrece una cobertura completa
                    que te protege contra daños propios y
                    terceros, incluyendo accidentes, robos
                    y vandalismo. Es una opción ideal para
                    una protección integral del véhículo.
                </p>

                <button className="cotizar-btn">
                    Cotizar
                </button>
            </div>
        </div>
    );
}