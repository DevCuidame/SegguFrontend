import React, { useState } from 'react';
import InputText from '../../../../components/inputs/InputText';
import InputDate from '../../../../components/inputs/InputDate';
import InputSelect from '../../../../components/inputs/InputSelect';
import InputImg from '../../../../components/inputs/InputImg';
import InputFile from '../../../../components/inputs/InputFile';
import ErrorPopUp from '../../../../components/errors/ErrorPopUp';
import { useInsuranceService } from '../../../../services/Insurance.service';
import { validateInsuranceForm, validateActiveForm, validateBeneficiaryForm } from '../../../../context/Validators';

import './AddInsuranceForm.scss';

const AddInsuranceForm = () => {
  // Estados para los datos de los formularios
  const [insuranceFormData, setInsuranceFormData] = useState({
    user_id: '',
    beneficiary_id: '',
    active_id: '',
    product: 'Seguro de Vida',
    type: '',
    renewal_date: '',
    description: '',
    coverage: '',
    asist: '',
    category: null,
    policy_number: '',
    company_id: '4',
  });
  const [activeFormData, setActiveFormData] = useState({
    product: '',
    plate: '',
    brand: '',
    line: '',
    model: '',
    cylinder_capacity: '',
    color: '',
    service: '',
    vehicle_class: '',
    cabin_type: '',
    fuel: '',
    capacity: '',
    engine_number: '',
    vin: '',
    serial_number: '',
    chassis_number: '',
    mobility_restriction: '',
    armor_level: '',
    horsepower: '',
    import_declaration: '',
    import_date: '',
    doors: '',
    registration_date: '',
  });
  const [beneficiaryFormData, setBeneficiaryFormData] = useState({
    img_person: '',
    name: '',
    citizenship_card: '',
    role: '',
    email: '',
    birth_date: '',
  });
  const formSetters = {
    insurance: setInsuranceFormData,
    active: setActiveFormData,
    beneficiary: setBeneficiaryFormData,
  };

  const { createInsurance } = useInsuranceService();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState([]);


  const isAutoInsurance = insuranceFormData.product === 'Seguro de Auto';

  const closeAddInsuranceForm = () => {
    const insuranceForm = document.querySelector('.add-insurance-form');
    const mainHomr = document.querySelector('.main-home');

    insuranceForm.style.display = 'none';
    mainHomr.style.overflowY = 'scroll';
  };

  //----------------------------------------------------- Métodos para manejar los Inputs -----------------------------------------------------//

  const handleChange = (e, formType) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    formSetters[formType]((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleDateChange = (e, formType) => {
    const { name, value } = e.target;

    formSetters[formType]((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (base64Image, formType, fieldName) => {
    if (!base64Image) {
      alert("No se pudo procesar la imagen.");
      return;
    }
  
    formSetters[formType]((prevState) => ({
      ...prevState,
      [fieldName]: base64Image, // Guarda la imagen en Base64.
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError([]);
    
    const insuranceErrors = validateInsuranceForm(insuranceFormData);
    const activeErrors = isAutoInsurance ? validateActiveForm(activeFormData) : {};
    const beneficiaryErrors = !isAutoInsurance ? validateBeneficiaryForm(beneficiaryFormData) : {};
    
    const allErrors = [
      ...Object.values(insuranceErrors).map(msg => ({ id: `insurance-${Math.random()}`, message: msg })),
      ...Object.values(activeErrors).map(msg => ({ id: `active-${Math.random()}`, message: msg })),
      ...Object.values(beneficiaryErrors).map(msg => ({ id: `beneficiary-${Math.random()}`, message: msg }))
    ];
  
    if (allErrors.length > 0) {
      setError(allErrors);
      setIsSubmitting(false);
      return;
    }
  
    try {
      await createInsurance(insuranceFormData, activeFormData, beneficiaryFormData);
      alert('¡Seguro creado exitosamente!');
    } catch (err) {
      console.error('Error al crear el seguro:', err.message);
      setError([{ id: `general-${Math.random()}`, message: 'Ocurrió un error al registrar el seguro. Por favor, intenta de nuevo.' }]);
    } finally {
      setIsSubmitting(false);
    }
  };

  //----------------------------------------------------- Métodos para manejar los errores -----------------------------------------------------//

  const renderErrorPopUps = () => {
    return error.map((err) => (
      <ErrorPopUp
        key={err.id}
        message={err.message}
        onClose={() => handleCloseError(err.id)}
      />
    ));
  };

  const handleCloseError = (id) => {
    setError((prevErrors) => prevErrors.filter((error) => error.id !== id));
  };

  return (
    <div className="add-insurance-form">
      <form className="insurance-form" onSubmit={handleSubmit}>
        <h1>Registrar Seguro</h1>

        <div className="inputs-form">

          <InputSelect
              name="product"
              value={insuranceFormData.product}
              span="Tipo de Seguro"
              options={[
                { value: 'Seguro de Vida', label: 'Seguro de Vida' },
                { value: 'Seguro de Auto', label: 'Seguro de Auto' },
              ]}
              onChange={(e) => handleChange(e, 'insurance')}
          />

          <hr />

          {/* Campos comunes */}

          <h2 className='title-insurance-form'>{insuranceFormData.product}</h2>

          <InputText
            type="text"
            name="type"
            value={insuranceFormData.type}
            span="Tipo de Seguro"
            inputClass="input-field"
            onChange={(e) => handleChange(e, 'insurance')}
            iconName="cardId"
          />
          <InputText
            type="text"
            name="description"
            value={insuranceFormData.description}
            span="Descripcion"
            inputClass="input-field"
            onChange={(e) => handleChange(e, 'insurance')}
            iconName="person"
          />
          <InputText
            type="text"
            name="policy_number"
            value={insuranceFormData.policy_number}
            span="Número de poliza"
            inputClass="input-field"
            onChange={(e) => handleChange(e, 'insurance')}
            iconName="person"
          />
          <InputDate
            name="renewal_date"
            span="Fecha de renovación"
            inputClass="date-input"
            value={insuranceFormData.renewal_date}
            onChange={(e) => handleDateChange(e, 'insurance')}
          />
          <InputFile
            name="coverage"
            span="Archivo cobertura"
            inputClass="custom-input-class"
            value={insuranceFormData.coverage}
            onChange={(base64) => handleFileChange(base64,"insurance", "coverage")}
          />
          <InputFile
            name="asist"
            span="Archivo asistencia"
            inputClass="custom-input-class"
            value={insuranceFormData.asist}
            onChange={(base64) => handleFileChange(base64,"insurance", "asist")}
          />

          <br />
          <hr />
          <br />

          {/* Campos específicos para Active */}
          {isAutoInsurance && (
            <>
              <InputText
                type="text"
                name="product"
                value={activeFormData.product}
                span="Producto"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="plate"
                value={activeFormData.plate}
                span="Placa"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="brand"
                value={activeFormData.brand}
                span="Marca"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="line"
                value={activeFormData.line}
                span="Linea"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="model"
                value={activeFormData.model}
                span="Modelo"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="cylinder_capacity"
                value={activeFormData.cylinder_capacity}
                span="Cilindraje"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="color"
                value={activeFormData.color}
                span="Color"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="service"
                value={activeFormData.service}
                span="Servicio"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="vehicle_class"
                value={activeFormData.vehicle_class}
                span="Clase del Vehículo"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="cabin_type"
                value={activeFormData.cabin_type}
                span="Tipo de Cabina"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="fuel"
                value={activeFormData.fuel}
                span="Combustible"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="number"
                name="capacity"
                value={activeFormData.capacity}
                span="Capacidad"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="engine_number"
                value={activeFormData.engine_number}
                span="Número de Motor"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="vin"
                value={activeFormData.vin}
                span="VIN"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="serial_number"
                value={activeFormData.serial_number}
                span="Número de Serie"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="chassis_number"
                value={activeFormData.chassis_number}
                span="Número de Chasis"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="mobility_restriction"
                value={activeFormData.mobility_restriction}
                span="Restricciones de Movilidad"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="armor_level"
                value={activeFormData.armor_level}
                span="Nivel de Blindaje"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="horsepower"
                value={activeFormData.horsepower}
                span="Potencia"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputText
                type="text"
                name="import_declaration"
                value={activeFormData.import_declaration}
                span="Declaración de Importación"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputDate
                type="date"
                name="import_date"
                value={activeFormData.import_date}
                span="Fecha de Importación"
                inputClass="input-field"
                onChange={(e) => handleDateChange(e, 'active')}
              />
              <InputText
                type="number"
                name="doors"
                value={activeFormData.doors}
                span="Cantidad de Puertas"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'active')}
              />
              <InputDate
                type="date"
                name="registration_date"
                value={activeFormData.registration_date}
                span="Fecha de Registro"
                inputClass="input-field"
                onChange={(e) => handleDateChange(e, 'active')}
              />
            </>
          )}

          {/* Campos específicos para Beneficiary */}
          {!isAutoInsurance && (
            <>
              <InputImg
                name="img_person"
                value={beneficiaryFormData.img_person}
                onChange={(base64) => handleFileChange(base64, "beneficiary", "img_person")}
              />
              <InputText
                type="text"
                name="name"
                value={beneficiaryFormData.name}
                span="Nombre"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'beneficiary')}
                iconName="person"
              />
              <InputText
                type="text"
                name="citizenship_card"
                value={beneficiaryFormData.citizenship_card}
                span="Cedula de Ciudadanía"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'beneficiary')}
                iconName="document"
              />
              <InputText
                type="text"
                name="role"
                value={beneficiaryFormData.role}
                span="Role"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'beneficiary')}
                iconName="group"
              />
              <InputText
                type="email"
                name="email"
                value={beneficiaryFormData.email}
                span="Correo Electrónico"
                inputClass="input-field"
                onChange={(e) => handleChange(e, 'beneficiary')}
                iconName="email"
              />
              <InputDate
                type="date"
                name="birth_date"
                value={beneficiaryFormData.birth_date}
                span="Fecha de Nacimiento"
                inputClass="input-field"
                onChange={(e) => handleDateChange(e, 'beneficiary')}
                iconName="calendar"
              />
            </>
          )}
        </div>

        {/* Botón de envío */}
        <div className="buttons">
          <button
            type="button"
            className="btn btn-atras"
            onClick={closeAddInsuranceForm}
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            className="btn btn-siguiente" 
          >
            Agregar
          </button>
        </div>
      </form>
      <div className='errors-alert'>
        {renderErrorPopUps()}
      </div>
    </div>
  );
};

export default AddInsuranceForm;
