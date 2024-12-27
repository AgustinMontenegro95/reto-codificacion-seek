// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Contexto de autenticación
const AuthContext = createContext();

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ isAuthenticated: false, token: '' });

    const login = () => {
        // Simulación de login: en un caso real, verificarías las credenciales y recibirías un JWT
        setAuth({ isAuthenticated: true, token: 'mock-token' });
    };

    const logout = () => {
        setAuth({ isAuthenticated: false, token: '' });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para acceder al contexto
export const useAuth = () => useContext(AuthContext);
