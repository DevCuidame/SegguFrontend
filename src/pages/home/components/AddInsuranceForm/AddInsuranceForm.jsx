import React, { useState } from 'react';
import InputText from '../../../../components/inputs/InputText';
import InputDate from '../../../../components/inputs/InputDate';
import InputSelect from '../../../../components/inputs/InputSelect';
import InputImg from '../../../../components/inputs/InputImg';
import { useInsuranceService } from '../../../../services/Insurance.service';

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
    coverage: null,
    asist: null,
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
    img_profile_path: '',
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
  const [error, setError] = useState(null); 

  const isAutoInsurance = insuranceFormData.product === 'Seguro de Auto';

  // Función para manejar el cambio de los datos en los form datas
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

  const handleFileChange = ({ target: { name, value } }, formType) => {
    if (value && value.startsWith("data:image")) {
      formSetters[formType]((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      alert("Por favor, sube una imagen válida en formato base64.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Esto previene que la página se recargue
    setIsSubmitting(true);
    setError(null);

    try {
      console.log(insuranceFormData, activeFormData, beneficiaryFormData);
      await createInsurance(insuranceFormData, activeFormData, beneficiaryFormData);
      alert('¡Seguro creado exitosamente!');
      
    } catch (err) {
      setError(err.message);
      console.error('Error al crear el seguro:', err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeAddInsuranceForm = () => {
    const insuranceForm = document.querySelector('.add-insurance-form');
    const mainHomr = document.querySelector('.main-home');

    insuranceForm.style.display = 'none';
    mainHomr.style.overflowY = 'scroll';
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

          {/*  TODO: Agregar los campos para lis inputs file de asist y coverage  */}

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
                name="img_profile_path"
                value={beneficiaryFormData.img_profile_path}
                onChange={(base64Image) =>
                  handleFileChange(
                    { target: { name: "img_profile_path", value: base64Image } },
                    "beneficiary"
                  )
                }
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
    </div>
  );
};

export default AddInsuranceForm;
