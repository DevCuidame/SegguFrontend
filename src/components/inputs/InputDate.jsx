import React from 'react';
import PropTypes from 'prop-types';
import './Inputs.scss';

const InputDate = ({
  name,
  value,
  span,
  inputClass,
  onChange,
}) => {
  const inputRef = React.useRef(null);

  // Manejar el clic para abrir el calendario
  const handleFocusInput = (e) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.showPicker(); // Método para abrir el calendario en navegadores modernos
    }
  };

  return (
    <div 
      className={`inputDiv ${name}`} 
      onClick={handleFocusInput} // Detectar clic en todo el contenedor
      style={{ cursor: 'pointer' }}
    >
      <span className="input-span" style={{ top: '-25px' }}>
        {span}
      </span>

      <input
        type="date"
        name={name}
        className={inputClass}
        value={value || ''} 
        onChange={onChange}
        ref={inputRef} // Referencia para controlar el calendario
      />
      <picture className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-calendar-event"
          viewBox="0 0 16 16"
        >
          <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
        </svg>
      </picture>
    </div>
  );
};

InputDate.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string, // Controlado por el padre
  span: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired, // Función para actualizar el estado
};

export default InputDate;
