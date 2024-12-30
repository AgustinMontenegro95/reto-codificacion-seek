import React, { useState } from 'react';
import { Box } from '@mui/material';
import { TaskList } from './widgets/TaskList';
import useTasks from '../../hooks/useTask';
import { MyAppBar } from './widgets/MyAppBar';
import { TaskBar } from './widgets/TaskBar';
import { TaskDialog } from './widgets/TaskDialog';

export const HomePage = () => {
    const { tasks, loading, removeTask, changeTask, addTask } = useTasks();
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setTaskToEdit(null);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleEditTask = (task) => {
        setTaskToEdit(task);
        setOpenDialog(true);
    };

    const handleSaveTask = async (updatedTask, taskId) => {
        console.log(taskId);  // Asegúrate de que taskId sea undefined si estás creando una nueva tarea
        console.log(updatedTask);

        if (taskId) {
            // Si hay taskId, estamos editando, por lo tanto, cambiamos la tarea
            changeTask(taskId, updatedTask);
        } else {
            // Si no hay taskId, estamos agregando una nueva tarea
            addTask(updatedTask);
        }
        handleCloseDialog();
    };


    return (
        <Box>
            <MyAppBar />
            <TaskBar onAddTask={handleOpenDialog} />
            <TaskList tasks={tasks} onDelete={removeTask} onUpdate={changeTask} onEdit={handleEditTask} loading={loading} />
            <TaskDialog
                open={openDialog}
                onClose={handleCloseDialog}
                taskToEdit={taskToEdit}
                onSaveTask={handleSaveTask}
            />
        </Box>
    );
};
