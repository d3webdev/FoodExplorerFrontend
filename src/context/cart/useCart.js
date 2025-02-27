import { useContext } from 'react';
import { CartContext } from './cartProvider';

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart deve ser usado com CartProvider');
    }
    return context;
}
