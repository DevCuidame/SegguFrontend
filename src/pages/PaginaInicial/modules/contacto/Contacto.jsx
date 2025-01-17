import React from 'react';
import './Contacto.scss';

const Contacto = () => {
    const focusSpan = (spanClass) => {
        const span = document.querySelector(`.${spanClass}`);

        span.style.top = '-32px';
        span.style.fontSize = '1.25rem';
    }

    const blurSpan = (spanClass, inputClass) => {
        const span = document.querySelector(`.${spanClass}`);
        const input = document.querySelector(`.${inputClass}`);
        if (span && input && input.value.trim() === "") {
            span.style.top = '0';
            span.style.fontSize = '1.5rem';
        }
    };

    return (
        <div className="contacto-module">
            <article className="contacto">
                <form className="form-contacto" action="">
                    <div className="title">
                        <h1>Contactenos</h1>
                        <p>
                            Puedes escribirnos en cualquier momento,
                            te contestaremos tan pronto como podamos.
                        </p>
                    </div>

                    <div className="input nombre">
                        <span className="span-nombre">Nombre</span>
                        <input
                            type="text"
                            className='input input-nombre'
                            onFocus={() => focusSpan("span-nombre")}
                            onBlur={() => blurSpan("span-nombre", "input-nombre")}
                        />
                    </div>

                    <div className="input email">
                        <span className="span-email">Email</span>
                        <input
                            type="email"
                            className='input input-email'
                            onFocus={() => focusSpan("span-email")}
                            onBlur={() => blurSpan("span-email", "input-email")}
                        />
                    </div>

                    <div className="input mensaje">
                        <span className="span-mensaje">Mensaje</span>
                        <input
                            type="text"
                            className='input input-mensaje'
                            onFocus={() => focusSpan("span-mensaje")}
                            onBlur={() => blurSpan("span-mensaje", "input-mensaje")}
                        />
                    </div>

                    <button className='btn' type="submit"><h5>Enviar</h5></button>
                </form>

                <section className="informacion">
                    <h1>Info</h1>

                    <span className="email">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-envelope" viewBox="0 0 18 18">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                        </i>
                        <span className='span-info'>caropinzon@segguco.com</span>
                    </span>

                    <span className="numero">
                        <i >
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-telephone" viewBox="0 0 18 18">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                        </i>
                        <span className='span-info'>3115979233</span>
                    </span>
                    <span className="lugar">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 18 18">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                        </i>
                    </span>
                    <span className="horario">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-clock" viewBox="0 0 18 18">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                            </svg>
                        </i>
                    </span>
                </section>

                <div className="bg"></div>
            </article>
        </div>
    );
};

export default Contacto;
