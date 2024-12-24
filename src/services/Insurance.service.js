import API_BASE_URL from '../ApiConfig';
import { useAuthService } from './AuthUser.service';

export const useInsuranceService = () => {
  const { getUser, authFetch } = useAuthService();

  const getInsurance = async () => {
    try {
      const user = getUser();
      if (!user || !user.id) throw new Error('El usuario no está autenticado');

      const response = await authFetch(`${API_BASE_URL}/insurances/user/${user.id}`);
      return response;
    } catch (error) {
      console.error('Error en getInsurance:', error.message);
      throw error;
    }
  };

  return { getInsurance };
};
