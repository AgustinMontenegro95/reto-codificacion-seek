// src/mocks/taskApi.js

export const tasksMock = [
    { id: 1, title: 'Tarea 1', description: 'Descripción de la tarea 1', status: 'por hacer' },
    { id: 2, title: 'Tarea 2', description: 'Descripción de la tarea 2', status: 'en progreso' },
    { id: 3, title: 'Tarea 3', description: 'Descripción de la tarea 3', status: 'completada' },
];

export const fetchTasks = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasksMock);
        }, 1000);
    });
};

export const deleteTask = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(id);
        }, 1000);
    });
};

export const updateTaskStatus = (id, status) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, status });
        }, 1000);
    });
};

export const createTask = (task) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ ...task, id: Math.random() });
        }, 1000);
    });
};
