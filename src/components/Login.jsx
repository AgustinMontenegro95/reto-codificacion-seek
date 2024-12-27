// src/components/Login.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/images/logo.jpg';

const Login = () => {
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
                backgroundColor: 'black',
            }}
        >
            <Box sx={{ width: '30%', margin: 'auto', display: 'flex', flexDirection: 'column' }}>
                <img
                    src={logo}
                    alt="Logo"
                    draggable={false}
                    style={{ width: '150px', margin: 'auto' }}
                />
                <Typography
                    sx={{
                        fontFamily: 'Louis-Cafe-Bold',
                        textAlign: 'center',
                        marginBottom: '1vw',
                        color: '#aaa',
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
                    <TextField
                        label="Usuario"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        variant="filled"
                        margin="normal"
                        fullWidth
                        InputProps={{
                            style: {
                                backgroundColor: '#1c1c1c',
                                color: 'white',
                            },
                        }}
                        InputLabelProps={{
                            style: { color: '#aaa' },
                        }}
                    />
                    <TextField
                        label="Contraseña"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={credentials.password}
                        onChange={handleChange}
                        variant="filled"
                        margin="normal"
                        fullWidth
                        InputProps={{
                            style: {
                                backgroundColor: '#1c1c1c',
                                color: 'white',
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={togglePasswordVisibility}
                                        edge="end"
                                        sx={{ color: '#aaa' }}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            style: { color: '#aaa' },
                        }}
                    />
                    {error && <Typography color="error">{error}</Typography>}
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: '#bbb',
                            color: '#444',
                            marginTop: '2vw',
                            '&:hover': {
                                backgroundColor: '#999',
                            },
                        }}
                    >
                        Iniciar Sesión
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default Login;
