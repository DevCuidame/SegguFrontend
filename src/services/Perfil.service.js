import { getCurrentUser } from './AuthUser.service'
import API_BASE_URL from '../ApiConfig';

const getUser = getCurrentUser();

// Obtener una póliza de seguro por ID
export const getPerfilInfo = async () => {
  try {
    const id = getUser.user.id;

    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error al obtener la póliza con ID ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error en getInsuranceById:', error.message);
    throw error;
  }
};