// src/hooks/useTasks.js
import { useState, useEffect } from 'react';
import { fetchTasks, deleteTask, updateTaskStatus, createTask } from '../mocks/taskApi';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTasks().then((tasks) => {
            setTasks(tasks);
            setLoading(false);
        });
    }, []);

    const removeTask = (id) => {
        deleteTask(id).then(() => {
            setTasks(tasks.filter((task) => task.id !== id));
        });
    };

    const changeTaskStatus = (id, status) => {
        updateTaskStatus(id, status).then((task) => {
            setTasks(tasks.map((t) => (t.id === task.id ? { ...t, status: task.status } : t)));
        });
    };

    const addTask = (newTask) => {
        createTask(newTask).then((task) => {
            setTasks([...tasks, task]);
        });
    };

    return { tasks, loading, removeTask, changeTaskStatus, addTask };
};

export default useTasks;
