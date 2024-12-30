import { Box } from '@mui/material';
import { TaskColumn } from './TaskColumn';

export const TaskList = ({ tasks, onDelete, onEdit, loading }) => {

    // Agrupar tareas por estado
    const groupedTasks = {
        'por hacer': tasks.filter((task) => task.status === 'por hacer'),
        'en progreso': tasks.filter((task) => task.status === 'en progreso'),
        'completada': tasks.filter((task) => task.status === 'completada'),
    };

    return (
        <Box sx={{ margin: 'auto', p: 1 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    gap: 1,
                }}
            >
                <TaskColumn
                    title="Por Hacer"
                    tasks={groupedTasks['por hacer']}
                    bgColor="#64B5F6"
                    onEdit={onEdit}
                    onDelete={onDelete}
                    loading={loading}
                />
                <TaskColumn
                    title="En Progreso"
                    tasks={groupedTasks['en progreso']}
                    bgColor="#FF7043"
                    onEdit={onEdit}
                    onDelete={onDelete}
                    loading={loading}
                />
                <TaskColumn
                    title="Completada"
                    tasks={groupedTasks['completada']}
                    bgColor="#A5D6A7"
                    onEdit={onEdit}
                    onDelete={onDelete}
                    loading={loading}
                />
            </Box>
        </Box>
    );
};
