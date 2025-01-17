import { useAuth } from '../context/AuthContext';
import API_BASE_URL from '../ApiConfig';

export const useAuthService = () => {
  const { login, logout, isAuthenticated, user, token } = useAuth();

  const loginUser = async (userInput, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al iniciar sesión');
      }

      const { user } = await response.json();

      login(user); // Llama al login del contexto.

      return user;
    } catch (error) {
      console.error('Error en loginUser:', error.message);
      throw new Error('Credenciales inválidas o error de conexión');
    }
  };

  const authFetch = async (url, options = {}) => {
    if (!token) {
      logout();
      throw new Error('No hay token disponible, por favor inicia sesión nuevamente');
    }

    const headers = {
      ...(options.headers || {}),
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await fetch(url, { ...options, headers });

      if (response.status === 401) {
        logout();
        throw new Error('Sesión expirada, por favor inicia sesión nuevamente');
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en la solicitud al servidor');
      }

      return await response.json();
    } catch (error) {
      console.error('Error en authFetch:', error.message);
      throw new Error('Error en la comunicación con el servidor');
    }
  };

  const registerUser = async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al registrar usuario');
      }

      const { user, token } = await response.json();

      login({ user, token });

      return { user, token };
    } catch (error) {
      console.error('Error en registerUser:', error.message);
      throw new Error('Error al registrar usuario o conexión con el servidor');
    }
  };

  const getUser = () => user;

  return { loginUser, logout, isAuthenticated, authFetch, getUser, registerUser };
};
