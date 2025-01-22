import { useCallback } from 'react';
import { useAuthService } from './AuthUser.service';
import API_BASE_URL from '../ApiConfig';

export const usePerfilService = () => {
  const { getUser } = useAuthService();

  // Obtener información del perfil con `useCallback`
  const getPerfilInfo = useCallback(async () => {
    const user = getUser();
    if (!user || !user.id) throw new Error('Usuario no autenticado');

    const response = await fetch(`${API_BASE_URL}/users/${user.id}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error al obtener la información del perfil con ID ${user.id}`);
    }

    return response.json(); // Retorna los datos del perfil
  }, [getUser]);

  const uploadPerfilInfo = useCallback(async ( userData ) => {
    const user = getUser();

    console.log(user);
    console.log(userData);

    if (!user || !user.id) throw new Error('Usuario no autenticado');

    const response= await fetch(`${API_BASE_URL}/users/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error al obtener la información del perfil con ID ${user.id}`);
    }

    return response.json(); // Retorna los datos del perfil
  }, [getUser]);

  return { getPerfilInfo, uploadPerfilInfo };
};
