import { useContext } from 'react';
import { PayContext } from './payProvider';

export function usePay() {
    const context = useContext(PayContext);

    if (!context) {
        throw new Error('usePay must be used within an PayProvider');
    }

    return context;
}
