import React, { useState } from 'react';
import InputText from '../../../components/inputs/InputText';
import InputDate from '../../../components/inputs/InputDate';
import InputImg from '../../../components/inputs/InputImg';
import { usePerfilService } from '../../../services/Perfil.service';

import './EditProfile.scss';

const EditProfile = ({ user, onClose }) => {
  const [userData, setUserData] = useState({
    img_profile_path: user.img_profile_path || '',
    name: user.name || '',
    lastname: user.lastname || '',
    citizenship_card: user.citizenship_card || '',
    birth_date: user.birth_date || '',
    locate: user.locate || '',
    company: user.company || '',
    role: user.role || '',
  });

  const [modifiedFields, setModifiedFields] = useState({});
  const { uploadPerfilInfo } = usePerfilService();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setModifiedFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleFileChange = ({ target: { name, value } }) => {
    if (value && value.startsWith('data:image')) {
      setUserData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      setModifiedFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
    } else {
      alert('Por favor, sube una imagen válida en formato base64.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      console.log('modifiedFields:', modifiedFields);
      await uploadPerfilInfo(modifiedFields);
      alert('¡Usuario actualizado exitosamente!');
    } catch (err) {
      setError(err.message);
      console.error('Error al actualizar el usuario:', err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="edit-user-form">
      <form className="user-form" onSubmit={handleSubmit}>
        <h1>Editar Usuario</h1>
        <div className="inputs-form">
          <InputImg
            name="img_profile_path"
            value={userData.img_profile_path}
            onChange={(base64Image) =>
              handleFileChange({ target: { name: 'img_profile_path', value: base64Image } })
            }
          />
          <InputText
            type="text"
            name="name"
            value={userData.name}
            span="Nombre Completo"
            inputClass="input-field"
            onChange={handleChange}
          />
          <InputText
            type="text"
            name="lastname"
            value={userData.lastname}
            span="Apellido Completo"
            inputClass="input-field"
            onChange={handleChange}
          />
          <InputText
            type="text"
            name="citizenship_card"
            value={userData.citizenship_card}
            span="Cedula de Identidad"
            inputClass="input-field"
            onChange={handleChange}
          />
          <InputText
            type="text"
            name="company"
            value={userData.company}
            span="Compañía"
            inputClass="input-field"
            onChange={handleChange}
          />
          <InputText
            type="text"
            name="role"
            value={userData.role}
            span="Cargo"
            inputClass="input-field"
            onChange={handleChange}
          />
          <InputText
            type="text"
            name="locate"
            value={userData.locate}
            span="Dirección"
            inputClass="input-field"
            onChange={handleChange}
          />
          <InputDate
            type="date"
            name="birth_date"
            value={userData.birth_date}
            span="Fecha de Nacimiento"
            inputClass="date-input"
            onChange={handleChange}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <div className="buttons">
          <button
            type="button"
            className="btn btn-atras"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            className="btn btn-siguiente" 
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
