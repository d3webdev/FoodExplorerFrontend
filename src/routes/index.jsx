import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../context/auth/useAuth';
import { AppRoutes } from './app.routes';
import { verifyInterceptors } from '../services/api';
import { useAuthVerify } from '../hooks/authVerify/useAuthVerify';
import { useEffect } from 'react';

export const Routes = () => {
    const { user, isLoading } = useAuth();
    const { verifyAuth } = useAuthVerify();

    useEffect(() => {
        verifyInterceptors(verifyAuth);
    }, [verifyAuth]);

    if (isLoading) {
        return;
    }

    return (
        <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
    );
};
