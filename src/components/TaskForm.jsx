// src/components/TaskForm.js
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

const TaskForm = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description) {
            onCreate({ title, description, status: 'por hacer' });
            setTitle('');
            setDescription('');
        }
    };

    return (
        <div>
            <Typography variant="h6" gutterBottom>Crear Nueva Tarea</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Título"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Descripción"
                    variant="outlined"
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Crear Tarea
                </Button>
            </form>
        </div>
    );
};

export default TaskForm;
