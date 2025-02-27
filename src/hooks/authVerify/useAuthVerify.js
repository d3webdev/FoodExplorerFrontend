import { api } from '../../services/api';
import { useAuth } from '../../context/auth/useAuth';
import  { toast } from 'react-toastify';

export function useAuthVerify() {
    const { signOut, user } = useAuth();

    async function verifyAuth() {
        if (!user) {
            return;
        }
        try {
            await api.get('/sessions/verify', { withCredentials: true });
        } catch (error) {
            if (error.response.status === 401) {
                const shouldLogout = window.confirm('Sessão expirada. Clique OK para fazer login novamente');
                if (shouldLogout) {
                    signOut();
                }
            } else {
                toast.error('Erro ao verificar sessão');
            }

            return false;
        }
    }

    return { verifyAuth };
}