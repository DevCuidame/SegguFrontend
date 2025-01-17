import React from 'react';
import PropTypes from 'prop-types';
import './Inputs.scss';

// Icon mappings
const icons = {
  person: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className="bi bi-person-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </svg>
  ),
  password: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="currentColor"
      className="bi bi-key"
      viewBox="0 0 16 16"
    >
      <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
      <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </svg>
  ),
  cardId: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className="bi bi-person-vcard"
      viewBox="0 0 16 16"
    >
      <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1-1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z" />
    </svg>
  ),
  place: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className="bi bi-geo-alt-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
    </svg>
  ),
  business: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className="bi bi-briefcase-fill"
      viewBox="0 0 16 16"
    >
      <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
      <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
    </svg>
  ),
};

const InputText = ({
  type,
  name,
  value,
  span,
  inputClass,
  onChange,
  onFocus,
  onBlur,
  iconName,
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
      spanRef.current.style.top = '0';
      spanRef.current.style.fontSize = '1.5rem';
    }
  };

  return (
    <div className={`inputDiv ${name}`}>
      <span ref={spanRef} className="input-span" >{span}</span>
      <input
        type={type}
        name={name}
        className={`${inputClass}`}
        value={value || ''} // Fallback para evitar errores
        onChange={onChange}
        onFocus={() => {
          focusSpan();
          onFocus && onFocus();
        }}
        onBlur={() => {
          blurSpan();
          onBlur && onBlur();
        }}
      />
      <picture className="icon">{icons[iconName]}</picture>
    </div>
  );
};



InputText.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  span: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  iconName: PropTypes.string,
};

export default InputText;
