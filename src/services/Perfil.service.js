import { useAuthService } from './AuthUser.service';
import API_BASE_URL from '../ApiConfig';

export const usePerfilService = () => {
  const { getUser } = useAuthService();

  // Obtener información del perfil
  const getPerfilInfo = async () => {
    try {
      const user = getUser();
      const id = user.id;

      const response = await fetch(`${API_BASE_URL}/users/${id}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Error al obtener la información del perfil con ID ${id}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error en getPerfilInfo:', error.message);
      throw error;
    }
  };

  return { getPerfilInfo };
};