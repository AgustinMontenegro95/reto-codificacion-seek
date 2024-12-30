import { React } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginPage } from './LoginPage';
import { AuthProvider } from '../../context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

const renderWithProviders = () => {
    render(
        <AuthProvider>
            <Router>
                <LoginPage />
            </Router>
        </AuthProvider>
    );
};

describe('LoginPage', () => {
    test('renders login form', () => {
        renderWithProviders();

        // Verifica que los elementos de la página estén presentes
        expect(screen.getByLabelText(/usuario/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
        expect(screen.getByText(/Iniciar sesión/i)).toBeInTheDocument();
    });

    test('shows error message with invalid credentials', () => {
        renderWithProviders();

        // Simula la interacción del usuario
        fireEvent.change(screen.getByLabelText(/usuario/i), {
            target: { value: 'wrongUser' },
        });
        fireEvent.change(screen.getByLabelText(/contraseña/i), {
            target: { value: 'wrongPassword' },
        });

        fireEvent.click(screen.getByText(/Iniciar sesión/i));

        // Verifica que el mensaje de error aparezca
        expect(screen.getByText(/Credenciales incorrectas/i)).toBeInTheDocument();
    });

    test('calls login function with valid credentials', () => {
        const mockLogin = jest.fn();
        render(
            <AuthProvider value={{ login: mockLogin }}>
                <Router>
                    <LoginPage />
                </Router>
            </AuthProvider>
        );

        // Simula la interacción del usuario con credenciales válidas
        fireEvent.change(screen.getByLabelText(/usuario/i), {
            target: { value: 'admin' },
        });
        fireEvent.change(screen.getByLabelText(/contraseña/i), {
            target: { value: 'password' },
        });

        fireEvent.click(screen.getByText(/Iniciar sesión/i));

        // Verifica que la función login haya sido llamada
        expect(mockLogin).toHaveBeenCalled();
    });

    test('toggles password visibility', () => {
        renderWithProviders();

        const passwordInput = screen.getByLabelText(/contraseña/i);
        const visibilityIcon = screen.getByRole('button', { name: /visibility/i });

        // Verifica que el campo de contraseña es de tipo "password"
        expect(passwordInput).toHaveAttribute('type', 'password');

        // Simula el click para mostrar la contraseña
        fireEvent.click(visibilityIcon);

        // Verifica que el tipo del input se ha cambiado a "text"
        expect(passwordInput).toHaveAttribute('type', 'text');
    });
});
