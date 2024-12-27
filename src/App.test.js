import { render, screen } from '@testing-library/react';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders login page', () => {
    render(
        <AuthProvider>
            <Router>
                <App />
            </Router>
        </AuthProvider>
    );
    const linkElement = screen.getByText(/Iniciar sesión/i);
    expect(linkElement).toBeInTheDocument();
});
