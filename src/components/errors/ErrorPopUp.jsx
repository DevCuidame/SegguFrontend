import React from "react";
import "./ErrorPopup.scss";

const ErrorPopUp = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="error-popup">
      <div className="error-popup__content">
        <span className="error-popup__message">{message}</span>
        <button className="error-popup__close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default ErrorPopUp;
