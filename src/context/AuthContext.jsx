import React, { createContext, useState, useContext, useEffect } from 'react';
import { mockJwt } from '../mocks/mockJwt';

// Contexto de autenticación
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ isAuthenticated: false, token: '' });

    useEffect(() => {
        const storedToken = localStorage.getItem('jwt-token');
        if (storedToken) {
            setAuth({ isAuthenticated: true, token: storedToken });
        }
    }, []);

    const login = () => {
        localStorage.setItem('jwt-token', mockJwt);
        setAuth({ isAuthenticated: true, token: mockJwt });
    };

    const logout = () => {
        localStorage.removeItem('jwt-token');
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
