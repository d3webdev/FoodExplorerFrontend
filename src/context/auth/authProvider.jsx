import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { api, cancelAllRequests } from '../../services/api';
import PropTypes from 'prop-types';

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    async function signIn({ email, password }) {
        try {
            const response = await api.post(
                '/sessions',
                {
                    email,
                    password,
                },
                { withCredentials: true }
            );
            const { user } = response.data;

            localStorage.setItem('@FoodExplorer:user', JSON.stringify(user));

            setData({ user });
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Não foi possível entrar.');
            }
        }
    }

    async function signOut(email) {
        setIsLoading(true);
        

        try {
            await api.delete('/sessions', {
                data: { email },
                withCredentials: true,
            });

            localStorage.removeItem('@FoodExplorer:user');
            localStorage.removeItem('@FoodExplorer:data');
            Cookies.remove('cart');
            
            setData({});
            
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Não foi possível sair.');
            }
        } finally {
            setIsLoading(false);
            cancelAllRequests();
            window.location.href = '/';
        }
        
    }

    useEffect(() => {
        const user = localStorage.getItem('@FoodExplorer:user');
        if (user) {
            setData({ user: JSON.parse(user) });
        }
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{ signIn, signOut, isLoading, user: data.user }}
        >
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthProvider, AuthContext };
