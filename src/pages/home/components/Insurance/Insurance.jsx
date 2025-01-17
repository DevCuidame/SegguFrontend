import React, { useState } from 'react';
import DocumentPopUp from '../DocumentPopUp/DocumentPopUp';
import './Insurance.scss';


function InsuranceCompoent ({ insurance }) {
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [document, setDocument] = useState({
        type: 'pdf',
        src: './example.pdf',
    });


    return(
        <div className="insurance-card">
            <article className='img-seguro'>
                <img src="https://cdn.aarp.net/content/dam/aarp/auto/2020/09/1140-auto-shop-esp.jpg" alt="img-seguro" />
            </article>
            
            <article className="info-container">

                <nav className="arriba">

                    <NavContainer 
                        title={"COBERTURA"}
                        description={insurance.coverage}
                        style={{backgroundColor: "#e4450f"}}
                        onClick={() => setIsModalOpen(true)}
                    />

                    <NavContainer 
                        title={"ASISTENCIA"}
                        description={insurance.asist}
                        style={{backgroundColor: "#e9bd31", color: "black"}}
                        onClick={() => setIsModalOpen(true)}
                    />
                </nav>

                <section className="medio">
                    <div className="about-seguro">
                        <h1 className="title">{insurance.product}</h1>

                        <div className="btn-container">
                            <div className="linea-seguro">
                                <i className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 18 18">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                    </svg>
                                </i>
                                <span>Linea de Seguro</span>
                            </div>

                            <div className="cotizacion">
                                <i className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash" viewBox="0 0 18 18">
                                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                                        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"/>
                                    </svg>
                                </i>
                                <span>Cotización</span>
                            </div>
                        </div>
                    </div>

                    <div className="info-seguro">
                        <ul>
                            <li>{insurance.Company?.name}</li>
                            {insurance.category && insurance.category.map((cat, index) => (
                                <li key={index}>{cat}</li>
                            ))}
                            <li>{insurance.type}</li>
                            <li>{insurance.policy_number}</li>
                            <li>Fecha renovación:</li>
                            <li>{insurance.renewal_date}</li>
                            <li>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 18 18">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                                    </svg>
                                </i>
                                <span>Renovación</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="abajo">
                    <button>Detalles</button>
                    <button>Certificados</button>
                </section>
            </article>

            {isModalOpen && (
                <DocumentPopUp
                documentType={document.type}
                documentSrc={document.src}
                onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

function NavContainer({ title, description, style, onClick }) {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div
      className="nav-container"
      onMouseEnter={showPopup}
      onMouseLeave={hidePopup}
      onClick={onClick}
    >
      <h6 style={style}>{title}</h6>

      {isPopupVisible && (
        <div className="popup-info">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}


export default InsuranceCompoent;