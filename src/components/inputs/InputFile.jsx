import React from 'react';
import PropTypes from 'prop-types';
import './Inputs.scss'; // Asume que quieres mantener un estilo similar al InputText

const InputFile = ({ name, value, onChange, span, inputClass, onFocus, onBlur }) => {
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result.split(',')[1]; // Obtiene solo la parte en base64
        onChange(base64); // Pasa el archivo en base64 al manejador del padre
      };
      reader.readAsDataURL(file); // Convierte a base64
    } else {
      onChange(null); // Limpia el valor si no es un PDF válido
      alert('Por favor, selecciona un archivo PDF.');
    }
  };

  return (
    <div className={`inputDiv ${name}`}>
      <span ref={spanRef} className="input-span">
        {span}
      </span>
      <input
        type="file"
        accept="application/pdf"
        name={name}
        className={`input-file ${inputClass}`}
        onFocus={() => {
          focusSpan();
          onFocus && onFocus();
        }}
        onBlur={() => {
          blurSpan();
          onBlur && onBlur();
        }}
        onChange={handleFileChange}
      />
    </div>
  );
};

InputFile.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func.isRequired,
  span: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default InputFile;
