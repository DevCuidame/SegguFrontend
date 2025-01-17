import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './DocumentPopUp.scss';

// Configuración del worker local
pdfjs.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@4.8.69/build/pdf.mjs';

const DocumentPopUp = ({ documentType, documentSrc, onClose }) => {
  return (
    <div className="document-popup-overlay">
      <div className="document-popup">
        <button className="close-button" onClick={onClose}>&times;</button>

        {documentType === 'image' ? (
          <img src={documentSrc} alt="Document" className="document-image" />
        ) : (
          <div className="pdf-container">
            <Document file={documentSrc}>
              <Page pageNumber={1} />
            </Document>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentPopUp;

