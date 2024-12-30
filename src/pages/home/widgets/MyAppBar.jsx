import { AppBar, Toolbar, Button, Typography, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../../../context/AuthContext';
import logo from '../../../assets/images/logo-2.png';

export const MyAppBar = () => {
    const { logout } = useAuth();

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Toolbar>
                <img
                    src={logo}
                    alt="Logo"
                    draggable={false}
                    style={{ width: '120px', margin: 'auto' }}
                />
                <Typography sx={{ flexGrow: 1, fontFamily: 'Louis-Cafe-Bold', fontSize: '1vw', textAlign: 'center', color: '#aaa' }}>
                    SISTEMA DE GESTIÓN DE TAREAS
                </Typography>

                <Tooltip title="Cerrar sesión">
                    <Button
                        onClick={logout}
                        style={{
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
