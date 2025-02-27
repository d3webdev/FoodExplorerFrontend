import { createContext, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import PropTypes from 'prop-types';

const PayContext = createContext({});

function PayProvider({ children }) {
    const [payment, setPayment] = useState('');

    const getPayment = useCallback(async (orderId, amount) => {
        try {
            const {data: response} = await api.post(
                '/payments',
                { order_id: orderId, payment_value: amount },
                { withCredentials: true }
            );
            setPayment(response);
            return response;
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Não foi possível encontrar o pagamento.');
            }
        }
    }, []);

    const sendPayment = useCallback(
        async (orderId, amount, method, status) => {

            try {
                let id = payment.id;
                if (!payment) {
                    let newPayment = await getPayment(orderId, amount);
                    if (Array.isArray(newPayment)) newPayment = newPayment[0];

                    if (!newPayment) {
                        toast.error('Não foi possível criar o pagamento.');
                    }
                    setPayment(newPayment);
                    id = newPayment.id;
                } 

                await api.put(
                    '/payments',
                    { id, status, method: method, payment_value: amount },
                    { withCredentials: true }
                );
            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error(
                        'Não foi possível processar o pagamento do pedido.'
                    );
                }
                throw error;
            } finally {
                setPayment([]);
            }
        },
        [getPayment, payment]
    );

    const cleanPayment = useCallback(() => {
        setPayment('');
    }
    , []);

    return (
        <PayContext.Provider value={{ getPayment, sendPayment, cleanPayment, payment }}>
            {children}
        </PayContext.Provider>
    );
}

PayProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { PayProvider, PayContext };
