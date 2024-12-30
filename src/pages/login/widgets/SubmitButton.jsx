
import { Button } from '@mui/material';

export const SubmitButton = ({ onClick }) => {
    return (
        <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            sx={{ marginTop: '2vw' }}
            onClick={onClick}
        >
            Iniciar Sesión
        </Button>
    );
};

