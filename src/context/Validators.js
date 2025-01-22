export const validateInsuranceForm = (formData) => {
  const errors = {};
  
  if (!formData.type.trim()) errors.type = 'El tipo de seguro es obligatorio.';
  if (!formData.description.trim()) errors.description = 'La descripción es obligatoria.';
  if (!formData.policy_number.trim()) errors.policy_number = 'El número de póliza es obligatorio.';
  if (!/^\d+$/.test(formData.policy_number)) errors.policy_number = 'El número de póliza debe ser numérico.';
  if (!formData.renewal_date) errors.renewal_date = 'La fecha de renovación es obligatoria.';
  
  return errors;
};

export const validateActiveForm = (formData) => {
  const errors = {};
  
  if (!formData.product.trim()) errors.product = 'El producto es obligatorio.';
  if (!formData.plate.trim()) errors.plate = 'La placa es obligatoria.';
  if (!formData.brand.trim()) errors.brand = 'La marca es obligatoria.';
  if (!formData.model.trim()) errors.model = 'El modelo es obligatorio.';
  if (formData.capacity && isNaN(Number(formData.capacity))) {
    errors.capacity = 'La capacidad debe ser un número.';
  }
  if (formData.doors && (!Number.isInteger(Number(formData.doors)) || Number(formData.doors) < 1)) {
    errors.doors = 'La cantidad de puertas debe ser un número entero mayor a 0.';
  }

  return errors;
};

export const validateBeneficiaryForm = (formData) => {
  const errors = {};
  
  if (!formData.name.trim()) errors.name = 'El nombre es obligatorio.';
  if (!formData.citizenship_card.trim()) errors.citizenship_card = 'La cédula de ciudadanía es obligatoria.';
  if (!formData.email.trim()) errors.email = 'El correo electrónico es obligatorio.';
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)) {
    errors.email = 'Debe ser un correo electrónico válido.';
  }
  if (!formData.birth_date) errors.birth_date = 'La fecha de nacimiento es obligatoria.';

  return errors;
};

export const validateSegmentNewUser = (segment, formData) => {
  const errors = {};

  switch (segment) {
    case 0: // Validaciones para el primer segmento
      if (!formData.email.trim()) errors.email = 'El correo electrónico es obligatorio.';
      if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)) errors.email = 'Debe ser un correo electrónico válido.';
      if (!formData.password.trim()) errors.password = 'La contraseña es obligatoria.';
      break;

    case 1: // Validaciones para el segundo segmento
      if (!formData.name.trim()) errors.name = 'El nombre es obligatorio.';
      if (!formData.lastname.trim()) errors.lastname = 'Los apellidos son obligatorios.';
      if (!formData.username.trim()) errors.username = 'El nombre de usuario es obligatorio.';
      if (!formData.birth_date) errors.birth_date = 'La fecha de nacimiento es obligatoria.';
      break;

    case 2: // Validaciones para el tercer segmento
      if (!formData.citizenship_card.trim()) errors.citizenship_card = 'La cédula de ciudadanía es obligatoria.';
      if (!/^\d+$/.test(formData.citizenship_card)) errors.citizenship_card = 'La cédula debe contener solo números.';
      if (!formData.company.trim()) errors.company = 'La compañía es obligatoria.';
      if (!formData.role.trim()) errors.role = 'La profesión es obligatoria.';
      if (!formData.locate.trim()) errors.locate = 'La dirección es obligatoria.';
      break;

    case 3: // Validaciones para el cuarto segmento
      if (!formData.img_profile_path) errors.img_profile_path = 'La imagen de perfil es obligatoria.';
      break;

    default:
      break;
  }

  return errors;
};