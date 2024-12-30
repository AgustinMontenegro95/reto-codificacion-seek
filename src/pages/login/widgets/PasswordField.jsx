import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const PasswordField = ({ label, name, value, onChange, showPassword, togglePasswordVisibility }) => {
    return (
        <TextField
            label={label}
            name={name}
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            variant="filled"
            margin="normal"
            fullWidth
            sx={{
                '& .MuiFilledInput-root': {
                    backgroundColor: '#1c1c1c',
                    color: 'white',
                },
                '& .MuiInputLabel-root': {
                    color: '#aaa',
                },
            }}
            slotProps={{
                input: {
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
                },
            }}
        />
    );
};
