import { useContext } from 'react';
import { OrderContext } from './orderProvider';

export function useOrder() {
    const context = useContext(OrderContext);

    if (!context) {
        throw new Error('useOrder must be used within an OrderProvider');
    }

    return context;
}
