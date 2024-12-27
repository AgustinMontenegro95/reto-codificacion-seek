// src/components/TaskItem.js
import React from 'react';
import { ListItem, ListItemText, Button, Select, MenuItem } from '@mui/material';

const TaskItem = ({ task, onDelete, onUpdate }) => {
    return (
        <ListItem>
            <ListItemText
                primary={task.title}
                secondary={`Estado: ${task.status}`}
            />
            <Select
                value={task.status}
                onChange={(e) => onUpdate(task.id, e.target.value)}
            >
                <MenuItem value="por hacer">Por hacer</MenuItem>
                <MenuItem value="en progreso">En progreso</MenuItem>
                <MenuItem value="completada">Completada</MenuItem>
            </Select>
            <Button onClick={() => onDelete(task.id)} color="error">Eliminar</Button>
        </ListItem>
    );
};

export default TaskItem;
