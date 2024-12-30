// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Importa desde 'react-dom/client' en lugar de 'react-dom'
import { App } from './App';
import { AuthProvider } from './context/AuthContext';
import './styles/styles.css'

// Utiliza createRoot en lugar de render
const root = ReactDOM.createRoot(document.getElementById('root'));  // Crea la raíz
root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
);
