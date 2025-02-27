import { createContext, useState, useCallback, useEffect } from 'react';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';

const CartContext = createContext({});

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [initialized, setInitialized] = useState(false);

    const updateCount = useCallback((dish_id, count) => {
        setCart((prev) => {
            const item = prev.findIndex((item) => item.id === dish_id);
            if (item === -1) {
                return [...prev, { id: dish_id, count }];
            }

            prev[item].count = count;

            return [...prev];
        });
    }, []);

    const getCount = useCallback(
        (id) => {
            const item = cart.find((item) => item.id === id);
            return item ? item.count : 0;
        },
        [cart]
    );

    const cleanCart = useCallback(() => {
        setCart([]);
    }, []);

    useEffect(() => {
        if (!initialized) {
            const dataCookie = Cookies.get('cart');
            if (dataCookie) {
                setCart(JSON.parse(dataCookie));
            }
            setInitialized(true);
        }
    }, [initialized]);

    useEffect(() => {
        if (initialized) {
            Cookies.set('cart', JSON.stringify(cart), {
                expires: 1,
                secure: false,
                sameSite: 'strict',
            });
            setTotalCount(cart.reduce((acc, item) => acc + item.count, 0));
        }
    }, [cart, initialized]);

    return (
        <CartContext.Provider
            value={{ getCount, updateCount, cleanCart, totalCount }}
        >
            {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { CartProvider, CartContext };
