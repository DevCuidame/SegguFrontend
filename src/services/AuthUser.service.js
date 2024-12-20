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

    // Guardar token y datos del usuario en almacenamiento local
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    return user;
  } catch (error) {
    console.error('Error en login:', error.message);
    throw new Error('Credenciales inválidas o error de conexión');
  }
};

// Cerrar sesión
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  console.log('Sesión cerrada');
};

// Verificar si el usuario está autenticado
export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) return false;

  try {
    const [, payload] = token.split('.');
    const decoded = JSON.parse(atob(payload));
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      logout(); // Cierra sesión si el token expiró
      return false;
    }
    return true;
  } catch (error) {
    console.warn('Token inválido:', error);
    logout(); // Limpia almacenamiento si el token es inválido
    return false;
  }
};

// Obtener el token actual
export const getToken = () => localStorage.getItem(TOKEN_KEY);

// Obtener los datos del usuario actual
export const getCurrentUser = () => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

// Middleware para solicitudes autenticadas
export const authFetch = async (url, options = {}) => {
  const token = getToken();

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
      throw new Error(errorData.message || 'Error en la solicitud');
    }

    return response;
  } catch (error) {
    console.error('Error en authFetch:', error.message);
    throw new Error(error.message || 'Error en la comunicación con el servidor');
  }
};
