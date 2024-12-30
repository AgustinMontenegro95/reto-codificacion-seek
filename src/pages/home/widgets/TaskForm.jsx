import { useState, useEffect } from 'react';
import { TextField, Button, Box, MenuItem } from '@mui/material';

export const TaskForm = ({ onCreate, onEdit, taskToEdit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('por hacer');

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
            setStatus(taskToEdit.status);
        }
    }, [taskToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const task = { title, description, status };

        if (taskToEdit) {
            // Estamos editando, por lo tanto, actualizamos la tarea
            await onEdit(taskToEdit.id, task);
        } else {
            // Estamos creando una nueva tarea, por lo tanto, la agregamos
            await onCreate(task);
        }

        // Resetear el formulario después de guardar
        setTitle('');
        setDescription('');
        setStatus('por hacer');
    };


    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    required
                    sx={{ mt: 1 }}
                />
                <TextField
                    label="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    required
                    multiline
                    rows={4}
                    sx={{ mt: 2 }}
                />
                <TextField
                    label="Estado"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    fullWidth
                    select
                    sx={{ mt: 2 }}
                >
                    <MenuItem value="por hacer">Por hacer</MenuItem>
                    <MenuItem value="en progreso">En progreso</MenuItem>
                    <MenuItem value="completada">Completada</MenuItem>
                </TextField>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        borderRadius: '15px',
                        textTransform: 'none',
                        fontFamily: 'Louis-Cafe-Bold',
                        mt: 2
                    }}
                >
                    {taskToEdit ? 'Editar tarea' : 'Crear tarea'}
                </Button>
            </form>
        </Box>
    );
};
