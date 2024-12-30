import React from 'react';
import { TextField } from '@mui/material';

export const CustomTextField = ({ label, name, value, onChange }) => {
    return (
        <TextField
            label={label}
            name={name}
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
                },
            }}
        />
    );
};
