import { Box, Typography, List, Tooltip, IconButton, Divider, Skeleton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

export const TaskColumn = ({ title, tasks, bgColor, onEdit, onDelete, loading }) => {
    return (
        <Box
            sx={{
                flex: 1,
                minWidth: { xs: '100%', sm: '30%' },
                backgroundColor: bgColor,
                borderRadius: '8px',
                p: 1.5,
            }}
        >
            <Typography
                sx={{
                    textAlign: 'center',
                    fontFamily: 'Louis-Cafe-Bold',
                    fontSize: { xs: '1.0rem', sm: '1.2rem', md: '1.4rem' },
                    color: '#fff',
                }}
            >
                {title}
            </Typography>
            <Box sx={{ borderRadius: '8px', p: 1 }}>
                <List>
                    {loading ? (
                        <>
                            <Skeleton variant="rectangular" animation="wave" height={80} sx={{ borderRadius: '8px', mb: 1 }} />
                            <Skeleton variant="rectangular" animation="wave" height={80} sx={{ borderRadius: '8px', mb: 1 }} />
                            <Skeleton variant="rectangular" animation="wave" height={80} sx={{ borderRadius: '8px' }} />
                        </>
                    ) : tasks.length === 0 ? (
                        // Mostrar mensaje si no hay tareas disponibles
                        <Typography
                            sx={{
                                textAlign: 'center',
                                fontFamily: 'Louis-Cafe-Regular',
                                fontSize: { xs: '1rem', sm: '1.2rem' },
                                color: '#fff',
                                padding: '1rem',
                            }}
                        >
                            No hay tareas disponibles en este momento.
                        </Typography>
                    ) : (
                        // Mostrar las tareas si no está cargando y hay tareas disponibles
                        tasks.map((task) => (
                            <Box
                                key={task.id}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    mb: 1,
                                    backgroundColor: '#fff',
                                    borderRadius: '8px',
                                    p: 1,
                                    flexDirection: 'column',
                                    boxShadow: 1,
                                }}
                            >
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Louis-Cafe-Bold',
                                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                                        }}
                                    >
                                        {task.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            whiteSpace: 'normal',
                                            wordWrap: 'break-word',
                                            fontFamily: 'Louis-Cafe-Regular',
                                            fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
                                        }}
                                    >
                                        {task.description}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Tooltip title="Editar tarea">
                                        <IconButton color="primary" onClick={() => onEdit(task)}>
                                            <Edit />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Eliminar tarea">
                                        <IconButton color="error" onClick={() => onDelete(task.id)}>
                                            <Delete />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Divider sx={{ my: 0.5, borderColor: '#ddd' }} />
                            </Box>
                        ))
                    )}
                </List>
            </Box>
        </Box>
    );
};
