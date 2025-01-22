import React, { useMemo } from 'react';
import './DocumentPopUp.scss';

const DocumentPopUp = ({ documentType, documentSrc, onClose }) => {
  // Convierte el contenido Base64 en una URL adecuada
  const transformedSrc = useMemo(() => {
    if (!documentSrc) return null;

    // Genera un prefix dependiendo del tipo de documento
    if (documentType === 'image') {
      return `data:image/jpeg;base64,${documentSrc}`;
    }
    if (documentType === 'pdf') {
      return `data:application/pdf;base64,${documentSrc}`;
    }
    return null;
  }, [documentType, documentSrc]);

  return (
    <div className="document-popup-overlay">
      <div className="document-popup">
        {/* Botón para cerrar el modal */}
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        {/* Renderización condicional según el tipo de archivo */}
        {documentType === 'image' ? (
          transformedSrc ? (
            <img src={transformedSrc} alt="Document" className="document-image" />
          ) : (
            <p>Error al cargar la imagen.</p>
          )
        ) : (
          transformedSrc ? (
            <div className="pdf-container">
              <iframe
                src={transformedSrc}
                title="PDF Document"
                className="pdf-viewer"
                frameBorder="0"
              ></iframe>
            </div>
          ) : (
            <p>Error al cargar el PDF.</p>
          )
        )}
      </div>
    </div>
  );
};

export default DocumentPopUp;