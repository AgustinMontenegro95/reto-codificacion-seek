import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { Logo } from './widgets/Logo';
import { CustomTextField } from './widgets/CustomTextField';
import { PasswordField } from './widgets/PasswordField';
import { SubmitButton } from './widgets/SubmitButton';

export const LoginPage = () => {
    const { login } = useAuth();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username === 'admin' && credentials.password === 'password') {
            login();
        } else {
            setError('Credenciales incorrectas');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
            }}
        >
            <Box
                sx={{
                    width: { xs: '90%', sm: '70%', md: '50%', lg: '30%' },
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Logo />
                <Typography
                    sx={{
                        fontFamily: 'Louis-Cafe-Bold',
                        textAlign: 'center',
                        marginBottom: '2vw',
                        color: '#aaa',
                        fontSize: { xs: '4vw', sm: '3vw', md: '2vw', lg: '1.5vw' },
                    }}
                >
                    SISTEMA DE GESTIÓN DE TAREAS
                </Typography>
                <Typography sx={{ fontFamily: 'Louis-Cafe-Bold', color: 'white' }}>
                    Iniciar sesión
                </Typography>
                <form
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
                >
                    <CustomTextField
                        label="Usuario"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                    <PasswordField
                        label="Contraseña"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        showPassword={showPassword}
                        togglePasswordVisibility={togglePasswordVisibility}
                    />
                    {error && <Typography color="error">{error}</Typography>}
                    <SubmitButton onClick={handleSubmit} />
                </form>
            </Box>
        </Box>
    );
};
