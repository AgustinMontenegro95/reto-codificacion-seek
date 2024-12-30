import { AppBar, Toolbar, Button, Typography, Tooltip, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../../../context/AuthContext';
import logo from '../../../assets/images/logo-2.png';

export const MyAppBar = () => {
    const { logout } = useAuth();

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black', paddingX: 2 }}>
            <Toolbar
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={logo}
                        alt="Logo"
                        draggable={false}
                        style={{ width: '120px' }}
                    />
                </Box>

                {/* Título */}
                <Typography
                    sx={{
                        fontFamily: 'Louis-Cafe-Bold',
                        fontSize: { xs: '4vw', sm: '2.5vw', md: '1.5vw', lg: '1vw' },
                        textAlign: 'center',
                        color: '#aaa',
                        flexGrow: 1, // Empuja el título al centro
                        display: { xs: 'none', sm: 'block' }, // Oculta el título en pantallas pequeñas
                    }}
                >
                    SISTEMA DE GESTIÓN DE TAREAS
                </Typography>

                {/* Botón de Cerrar Sesión */}
                <Tooltip title="Cerrar sesión">
                    <Button
                        onClick={logout}
                        sx={{
                            borderRadius: '30%',
                            backgroundColor: 'white',
                            padding: '10px',
                            minWidth: 'auto',
                        }}
                    >
                        <LogoutIcon />
                    </Button>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};
