import { useState, useEffect } from 'react';
import { fetchTasks, deleteTask, updateTask, createTask } from '../mocks/taskApi';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    // Cargar tareas al montar el componente
    useEffect(() => {
        const loadTasks = async () => {
            try {
                const tasks = await fetchTasks();
                setTasks(tasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            } finally {
                setLoading(false);
            }
        };
        loadTasks();
    }, []);

    const removeTask = async (id) => {
        try {
            await deleteTask(id);
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const changeTask = async (id, updatedFields) => {
        try {
            const updatedTask = await updateTask(id, updatedFields.title, updatedFields.description, updatedFields.status);
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === updatedTask.id ? updatedTask : task
                )
            );
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };


    const addTask = async (newTask) => {
        try {
            const task = await createTask(newTask);
            setTasks((prevTasks) => [...prevTasks, task]);
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    return { tasks, loading, removeTask, changeTask, addTask };
};

export default useTasks;
