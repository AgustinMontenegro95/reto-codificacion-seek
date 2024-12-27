// src/App.js
import React from 'react';
import { CssBaseline, Button, Box } from '@mui/material';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import useTasks from './hooks/useTask';

const App = () => {
    const { auth, logout } = useAuth();
    const { tasks, loading, removeTask, changeTaskStatus, addTask } = useTasks();

    return (
        <Box >
            <CssBaseline />
            {auth.isAuthenticated ? (
                <div>
                    <Button onClick={logout} color="secondary">Cerrar sesión</Button>
                    <TaskForm onCreate={addTask} />
                    <TaskList tasks={tasks} onDelete={removeTask} onUpdate={changeTaskStatus} />
                </div>
            ) : (
                <Login />
            )}
        </Box>
    );
};

export default App;
