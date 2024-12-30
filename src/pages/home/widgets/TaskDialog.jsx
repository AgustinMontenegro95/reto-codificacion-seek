import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { TaskForm } from './TaskForm';

export const TaskDialog = ({ open, onClose, taskToEdit, onSaveTask }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{taskToEdit ? 'Editar tarea' : 'Agregar tarea'}</DialogTitle>
            <DialogContent>
                <TaskForm onCreate={onSaveTask} onEdit={onSaveTask} taskToEdit={taskToEdit} />
            </DialogContent>
            <DialogActions>
                <Button
                    type="submit"
                    variant="contained"
                    color='error'
                    sx={{
                        borderRadius: '15px',
                        textTransform: 'none',
                        fontFamily: 'Louis-Cafe-Bold',
                        m: 2
                    }}
                    onClick={onClose}
                >
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    );
};
