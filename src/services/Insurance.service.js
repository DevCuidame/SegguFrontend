import { useCallback } from 'react';
import API_BASE_URL from '../ApiConfig';
import { useAuthService } from './AuthUser.service';

export const useInsuranceService = () => {
  const { getUser } = useAuthService();

  const getInsurance = useCallback(async () => {
    const user = getUser();
    if (!user || !user.id) throw new Error('Usuario no autenticado');

    const response = await fetch(`${API_BASE_URL}/insurances/user/${user.id}`);
    if (!response.ok) throw new Error('Error al obtener los seguros');
    return response.json();
  }, [getUser]);

  const createInsurance = useCallback(async (insuranceFormData, activeFormData, beneficiaryFormData) => {
    const user = getUser();
    if (!user || !user.id) throw new Error('Usuario no autenticado');

    try {
      let activeResponse = null;
      let beneficiaryResponse = null;

      // Crear un activo o beneficiario según corresponda
      if (insuranceFormData.product === 'active') {
        const response = await fetch(`${API_BASE_URL}/actives`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(activeFormData),
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Error al crear el activo: ${errorData.message}`);
        }
        activeResponse = await response.json();
      } else {
        const response = await fetch(`${API_BASE_URL}/beneficiaries`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(beneficiaryFormData),
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Error al crear el beneficiario: ${errorData.message}`);
        }
        beneficiaryResponse = await response.json();
      }

      // Crear el seguro
      const responseInsurance = await fetch(`${API_BASE_URL}/insurances`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...insuranceFormData,
          user_id: user.id,
          active_id: activeResponse?.active_id || null,
          beneficiary_id: beneficiaryResponse?.beneficiary_id || null,
        }),
      });

      if (!responseInsurance.ok) {
        const errorData = await responseInsurance.json();
        throw new Error(`Error al crear el seguro: ${errorData.message}`);
      }

      window.location.reload();
    } catch (error) {
      console.error('Error en createInsurance:', error);
      throw error;
    }
  }, [getUser]);

  return { getInsurance, createInsurance };
};
