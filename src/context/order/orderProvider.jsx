import { createContext, useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { useAuth } from '../auth/useAuth';
import PropTypes from 'prop-types';

const OrderContext = createContext({});

function OrderProvider({ children }) {
    const [orderId, setOrderId] = useState('');
    const [orderUser, setOrderUser] = useState('');
    const [itens, setItens] = useState([]);
    const [initialized, setInitialized] = useState(false);
    const { user } = useAuth();

    const {
        data: listItens,
        error: itensError,
        mutate: mutateItens,
    } = useSWR(
        user && orderId ? `/orders/itens/${orderId}` : null,
        async (url) => {
            const response = await api.get(url, { withCredentials: true });
            return response.data;
        },
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    const getOrderId = useCallback(async () => {
        try {
            const response = await api.post('/orders', null, {
                withCredentials: true,
            });
            const order = response.data;

            setOrderId(order.id);
            setOrderUser(order.user_id);

            return order.id;
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                return '0';
            }
        }
    }, []);

    const updateOrder = useCallback(
        async (dish_id, count) => {
            try {
                let currentOrderId = orderId;
                if (!currentOrderId) {
                    const newOrderID = await getOrderId();
                    if (!newOrderID) {
                        toast.error('Não foi possível criar o pedido.');
                    }
                    currentOrderId = newOrderID;
                }
                const response = await api.post(
                    '/orders/itens',
                    { order_id: currentOrderId, dish_id, quantity: count },
                    { withCredentials: true }
                );

                if (count === 0 && (!itens || itens.length < 2)) {
                    setOrderId('');
                    setItens([]);
                }

                setTimeout(async () => {
                    await mutateItens();
                }, 0);

                return response.data;
            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error(
                        'Não foi possível adicionar o prato ao pedido.'
                    );
                }

                throw error;
            }
        },
        [mutateItens, orderId, itens, getOrderId]
    );

    const cleanOrder = useCallback(() => {
        setOrderId('');
        setItens([]);
    }, []);

    useEffect(() => {
        itensError &&
            toast.error(
                itensError.response?.data.message ||
                    'Não foi possível encontrar os itens do pedido.'
            );
    }, [itensError]);

    useEffect(() => {
        listItens && setItens(listItens);
    }, [listItens]);

    useEffect(() => {
        if (!initialized && user) {
            const dataCookie = Cookies.get('order');
            if (dataCookie) {
                const dataOrder = JSON.parse(dataCookie);
                if (dataOrder.user_id === user.id) {
                    setOrderUser(dataOrder.user_id);
                    setOrderId(dataOrder.id);
                } else {
                    getOrderId();
                }
            } else {
                getOrderId();
            }
            setInitialized(true);
        }
    }, [initialized, getOrderId, user]);

    useEffect(() => {
        if (initialized) {
            Cookies.set(
                'order',
                JSON.stringify({ id: orderId, user_id: orderUser }),
                {
                    expires: 1,
                    secure: false,
                    sameSite: 'strict',
                }
            );
        }
    }, [initialized, orderId, orderUser]);

    return (
        <OrderContext.Provider
            value={{
                getOrderId,
                orderId,
                amount: itens?.reduce((acc, item) => acc + item.amount, 0),
                updateOrder,
                cleanOrder,
                itens: itens || [],
                isLoading: !itens && !itensError && orderId,
                totalOrder: itens?.reduce(
                    (acc, item) => acc + item.quantity,
                    0
                ),
            }}
        >
            {children}
        </OrderContext.Provider>
    );
}

OrderProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { OrderProvider, OrderContext };
