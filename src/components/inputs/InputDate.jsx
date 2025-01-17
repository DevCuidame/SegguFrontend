import React from 'react';
import PropTypes from 'prop-types';
import './Inputs.scss';

const InputDate = ({
  name,
  value,
  span,
  inputClass,
  onChange,
  onFocus,
  onBlur,
}) => {
  const spanRef = React.useRef(null);
  
  const focusSpan = () => {
    if (spanRef.current) {
      spanRef.current.style.top = '-25px';
      spanRef.current.style.fontSize = '1.25rem';
    }
  };
  

  const blurSpan = () => {
    if (spanRef.current && (value || '').trim() === '') {
      spanRef.current.style.top = '10px';
      spanRef.current.style.fontSize = '1.5rem';
    }
  };

  return (
    <div className={`inputDiv ${name}`}>
      <span ref={spanRef} className="input-span">{span}</span>

      <input
        type="date"
        name={name}
        className={inputClass}
        value={value || ''} // Asignamos el valor o una cadena vacía como fallback
        onChange={onChange} // Debe actualizar el estado en el componente padre
        onFocus={(event) => {
          focusSpan();
          if (onFocus) onFocus(event); // Llamamos a onFocus del padre
        }}
        onBlur={(event) => {
          blurSpan();
          if (onBlur) onBlur(event); // Llamamos a onBlur y le pasamos el evento
        }}
        autoComplete="on"
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
  value: PropTypes.string, // Debe ser controlado por el padre
  span: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired, // La función que actualiza el estado del padre
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default InputDate;
