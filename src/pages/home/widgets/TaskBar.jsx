import { Box, Button, Typography } from '@mui/material';

export const TaskBar = ({ onAddTask }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '99%',
                m: '2vw auto 1vw auto',
                backgroundColor: '#eee',
                padding: '1vw 4vw',
                borderRadius: '10px',
            }}
        >
            <Typography variant="h6" sx={{ fontFamily: 'Louis-Cafe-Bold' }}>
                Tareas
            </Typography>
            <Button
                variant="contained"
                color="success"
                onClick={onAddTask}
                sx={{
                    borderRadius: '15px',
                    textTransform: 'none',
                    fontFamily: 'Louis-Cafe-Bold',
                }}
            >
                Agregar nueva
            </Button>
        </Box>
    );
};
