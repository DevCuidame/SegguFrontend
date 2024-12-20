import API_BASE_URL from '../ApiConfig';

const TOKEN_KEY = 'token';
const USER_KEY = 'user';

// Iniciar sesión
export const login = async (userInput, password) => {
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

    const { token, user } = await response.json();

    // Guardar token, datos del usuario y user_id en localStorage
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    return user;
  } catch (error) {
    console.error('Error en login:', error.message);
    throw error;
  }
};

// Cerrar sesión
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

// Verificar si el usuario está autenticado
export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) return false;

  // Opción: Verificar expiración del token (dependiendo de su estructura)
  try {
    const [, payload] = token.split('.');
    const decoded = JSON.parse(atob(payload));
    const isExpired = decoded.exp && Date.now() >= decoded.exp * 1000;
    return !isExpired;
  } catch (error) {
    console.warn('Error al verificar el token:', error);
    return false;
  }
};

// Obtener el token actual
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// Obtener los datos del usuario actual
export const getCurrentUser = () => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

// Middleware para solicitudes autenticadas
export const authFetch = async (url, options = {}) => {
  const token = getToken();
  const headers = {
    ...(options.headers || {}),
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  // Manejo de errores como token expirado
  if (response.status === 401) {
    logout();
    throw new Error('Sesión expirada, por favor inicia sesión nuevamente');
  }

  return response;
};
