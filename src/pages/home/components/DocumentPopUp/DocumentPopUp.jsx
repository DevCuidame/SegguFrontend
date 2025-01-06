import React from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './DocumentPopUp.scss';

import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const DocumentPopUp = ({ documentType, documentSrc, onClose }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="document-popup-overlay">
      <div className="document-popup">
        <button className="close-button" onClick={onClose}>&times;</button>

        {documentType === 'image' ? (
          <img src={documentSrc} alt="Document" className="document-image" />
        ) : (
          <div className="document-pdf">
            <Viewer
              fileUrl={documentSrc}
              plugins={[defaultLayoutPluginInstance]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentPopUp;
