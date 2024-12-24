import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Recupera el usuario desde el localStorage al cargar la aplicación.
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(() => {
    // Recupera el token desde el localStorage al cargar la aplicación.
    return localStorage.getItem('token') || null;
  });

  const login = (user) => {
    // Guarda el usuario y el token en el estado.
    setUser(user.user);
    setToken(user.token);

    console.log(user,token);

    // También los guarda en localStorage para persistencia.
    localStorage.setItem('user', JSON.stringify(user.user));
    localStorage.setItem('token', user.token);
  };

  const logout = () => {
    // Limpia el estado y el localStorage.
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const isAuthenticated = () => {
    // Verifica si el token aún es válido.
    if (!token) return false;

    try {
      const [, payload] = token.split('.');
      const decoded = JSON.parse(atob(payload));
      if (decoded.exp && Date.now() >= decoded.exp * 1000) {
        logout(); // Cierra sesión si el token está expirado.
        return false;
      }
      return true;
    } catch (error) {
      console.warn('Token inválido:', error);
      logout();
      return false;
    }
  };

  const getUser = () => user; // Devuelve el usuario actual desde el estado.

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isAuthenticated,
        token,
        user,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
