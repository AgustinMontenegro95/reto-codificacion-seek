export const tasksMock = [
    { id: 1, title: 'Limpiar la cocina', description: 'Lavar los platos, limpiar superficies y barrer el piso.', status: 'por hacer' },
    { id: 2, title: 'Sacar la basura', description: 'Revisar todos los botes de basura y sacar la basura al contenedor.', status: 'en progreso' },
    { id: 3, title: 'Pasar la aspiradora', description: 'Aspirar todas las alfombras y áreas de la casa.', status: 'completada' },
    { id: 4, title: 'Lavar la ropa', description: 'Clasificar y poner una carga de ropa en la lavadora.', status: 'por hacer' },
    { id: 5, title: 'Limpiar el baño', description: 'Fregar el lavabo, la ducha y el inodoro, y limpiar el espejo.', status: 'en progreso' },
    { id: 6, title: 'Ordenar el salón', description: 'Recoger los juguetes y objetos fuera de lugar en la sala de estar.', status: 'completada' },
    { id: 7, title: 'Poner la mesa', description: 'Colocar los cubiertos, platos y vasos para la comida.', status: 'por hacer' },
    { id: 8, title: 'Limpiar el polvo', description: 'Pasar un trapo por los muebles y estanterías para eliminar el polvo acumulado.', status: 'en progreso' },
    { id: 9, title: 'Regar las plantas', description: 'Verificar las plantas y regarlas si es necesario.', status: 'completada' },
    { id: 10, title: 'Arreglar el jardín', description: 'Recortar el césped y regar las plantas exteriores.', status: 'por hacer' },
    { id: 11, title: 'Limpieza de ventanas', description: 'Limpiar las ventanas interiores y exteriores con un limpiador adecuado.', status: 'en progreso' },
    { id: 12, title: 'Desinfectar superficies', description: 'Pasar un desinfectante en superficies de alto contacto como manijas de puertas y mesas.', status: 'completada' },
    { id: 13, title: 'Organizar el closet', description: 'Reorganizar la ropa y donar las prendas que ya no se usen.', status: 'por hacer' },
    { id: 14, title: 'Cocinar la cena', description: 'Preparar una comida sencilla para la noche.', status: 'en progreso' },
    { id: 15, title: 'Revisar el correo', description: 'Abrir el correo y organizar los documentos importantes.', status: 'completada' },
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

export const updateTask = (id, title, description, status) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, title, description, status });
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
