import { useContext } from 'react';
import { DishContext } from './dishProvider';

export function useDish() {
    const context = useContext(DishContext);
    if (!context) {
        throw new Error('useDish deve ser usado com DishProvider');
    }
    return context;
}
