import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Inputs from '../../../../../components/inputs/InputText';
import InputDate from '../../../../../components/inputs/InputDate';
import InputImg from '../../../../../components/inputs/InputImg';
import './RegisterForm.scss';

import { useAuthService } from '../../../../../services/AuthUser.service';

const RegisterForm = ({ closeRegister }) => {
  const { registerUser } = useAuthService();
  const navigate = useNavigate();
  const [currentSegment, setCurrentSegment] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    username: '',
    birth_date: '',
    email: '',
    password: '',
    citizenship_card: '',
    company: '',
    role: '',
    locate: '',
    img_profile_path: null,
    user_type: 'User',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (base64Image) => {
    setFormData((prev) => ({ ...prev, img_profile_path: base64Image }));
  };

  const handleNextSegment = () => {
    setCurrentSegment((prev) => prev + 1);
  };

  const handlePrevSegment = () => {
    setCurrentSegment((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    try {
      await registerUser(formData);
      navigate('/home');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      {currentSegment === 0 && (
        <div className="segment">
          <Inputs
            type="email"
            name="email"
            value={formData.email}
            span="Correo electrónico"
            inputClass="input"
            onChange={handleInputChange}
            iconName="person"
          />
          <Inputs
            type="password"
            name="password"
            value={formData.password}
            span="Contraseña"
            inputClass="input"
            onChange={handleInputChange}
            iconName="password"
          />
          <div className="buttons">
            <button
              type="button"
              className="btn btn-atras"
              onClick={closeRegister}
            >
              Ingresar
            </button>
            <button type="button" className="btn btn-siguiente" onClick={handleNextSegment}>
              Siguiente
            </button>
          </div>
        </div>
      )}

      {currentSegment === 1 && (
        <div className="segment">
          <Inputs
            type="text"
            name="name"
            value={formData.name}
            span="Nombres"
            inputClass="input"
            onChange={handleInputChange}
            iconName="person"
          />
          <Inputs
            type="text"
            name="lastname"
            value={formData.lastname}
            span="Apellidos"
            inputClass="input"
            onChange={handleInputChange}
            iconName="person"
          />
          <Inputs
            type="text"
            name="username"
            value={formData.username}
            span="Usuario"
            inputClass="input"
            onChange={handleInputChange}
            iconName="cardId"
          />
          <InputDate
            name="birth_date"
            span="Fecha de nacimiento"
            inputClass="date-input"
            value={formData.birth_date}
            onChange={handleInputChange}
          />
          <div className="buttons">
            <button
              type="button"
              className="btn btn-atras"
              onClick={handlePrevSegment}
              disabled={currentSegment === 0}
            >
              Anterior
            </button>
            <button type="button" className="btn btn-siguiente" onClick={handleNextSegment}>
              Siguiente
            </button>
          </div>
        </div>
      )}

      {currentSegment === 2 && (
        <div className="segment">
          <Inputs
            type="text"
            name="citizenship_card"
            value={formData.citizenship_card}
            span="Cedula de ciudadanía"
            inputClass="input"
            onChange={handleInputChange}
            iconName="cardId"
          />
          <Inputs
            type="text"
            name="company"
            value={formData.company}
            span="Comapñia"
            inputClass="input"
            onChange={handleInputChange}
            iconName="business"
          />
          <Inputs
            type="text"
            name="role"
            value={formData.role}
            span="Profesión"
            inputClass="input"
            onChange={handleInputChange}
            iconName="business"
          />
          <Inputs
            type="text"
            name="locate"
            value={formData.locate}
            span="Dirección"
            inputClass="input"
            onChange={handleInputChange}
            iconName="place"
          />
          <div className="buttons">
            <button
              type="button"
              className="btn btn-atras"
              onClick={handlePrevSegment}
              disabled={currentSegment === 0}
            >
              Anterior
            </button>
            <button type="button" className="btn btn-siguiente" onClick={handleNextSegment}>
              Siguiente
            </button>
          </div>
        </div>
      )}

      {currentSegment === 3 && (
        <div className="segment">
          <InputImg onChange={handleFileChange} />
          <div className="buttons">
            <button
              type="button"
              className="btn btn-atras"
              onClick={handlePrevSegment}
              disabled={currentSegment === 0}
            >
              Anterior
            </button>
            <button type="submit" className="btn btn-siguiente">
              Enviar
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default RegisterForm;
