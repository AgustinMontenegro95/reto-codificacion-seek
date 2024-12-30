// src/App.js
import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { LoginPage } from './pages/login/LoginPage';
import { useAuth } from './context/AuthContext';
import { HomePage } from './pages/home/HomePage';

export const App = () => {
    const { auth } = useAuth();

    return (
        <Box >
            <CssBaseline />
            {auth.isAuthenticated ? (
                <HomePage />
            ) : (
                <LoginPage />
            )}
        </Box>
    );
};

