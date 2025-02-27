import { createContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { useAuth } from '../auth/useAuth';
import { useCallback, useMemo, useState } from 'react';
import useSWR from 'swr';
import PropTypes from 'prop-types';

const DishContext = createContext({});

function DishProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState('');
    const { user } = useAuth();
    const userId = user?.id;

    const {
        data: listDish,
        error: dishesError,
        isLoading: dishLoading,
        mutate: mutateDish,
    } = useSWR(
        userId ? '/dishes' : null,
        async (url) => {
            const response = await api.get(url, { withCredentials: true });
            return response.data;
        },
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    const normalizeText = (text) => {
        return text?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    const handleSearch = useCallback((term) => {
        setSearchTerm(term);
    }, []);

    const filteredDishe = useMemo(() => {
        if (!listDish) return [];
        if (!searchTerm.trim()) return listDish;

        const normalizedSearchTerm = normalizeText(searchTerm);

        return listDish.filter((item) => {
            const normalizedDishName = normalizeText(item.name);
            const normalizedDishDescription = normalizeText(item.description);

            const dishNameandDescription =
                normalizedDishName.includes(normalizedSearchTerm) ||
                normalizedDishDescription.includes(normalizedSearchTerm);
            const dishIngredients = item.ingredients?.some((ingredient) =>
                normalizeText(ingredient.name).includes(normalizedSearchTerm)
            );

            return dishNameandDescription || dishIngredients;
        });
    }, [listDish, searchTerm]);

    const getDish = useCallback(
        async (id) => {
            if (listDish?.length) {
                return listDish.find((dish) => dish.id === id);
            }
        },
        [listDish]
    );

    useEffect(() => {
        dishesError && toast.error('Não foi possível encontrar pratos.');
    }, [dishesError]);

    return (
        <DishContext.Provider
            value={{
                listDish: filteredDishe,
                dishLoading,
                getDish,
                mutateDish,
                handleSearch,
            }}
        >
            {children}
        </DishContext.Provider>
    );
}

DishProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { DishProvider, DishContext };
