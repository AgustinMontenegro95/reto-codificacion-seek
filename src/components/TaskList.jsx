// src/components/TaskList.js
import React from 'react';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
    return (
        <div>
            <Typography variant="h6" gutterBottom>Tareas</Typography>
            <List>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
                ))}
            </List>
        </div>
    );
};

export default TaskList;
