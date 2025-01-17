import React from 'react';
import PropTypes from 'prop-types';
import './Inputs.scss';

const InputSelect = ({
  name,
  value,
  options,
  span,
  inputClass,
  onChange,
  onFocus,
  onBlur,
}) => {
  const spanRef = React.useRef(null);


  return (
    <div className={`inputDiv ${name}`}>
      <span ref={spanRef} className="input-span" style={{top: "-25px", fontSize: "1.25rem"}}>{span}</span>
      <select
        name={name}
        value={value || ''} // Fallback para evitar errores
        className={`input-select ${inputClass}`}
        onChange={onChange}
      >
        {options.map(({ value, label }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

InputSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  span: PropTypes.string.isRequired,
  inputClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default InputSelect;
