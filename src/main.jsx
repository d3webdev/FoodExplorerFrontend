import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CartProvider } from './context/cart/cartProvider';
import { DishProvider } from './context/dish/dishProvider';
import { OrderProvider } from './context/order/orderProvider';
import { PayProvider } from './context/pay/payProvider';
import themeDark from './styles/themeDark';
import themeLight from './styles/themeLight';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/auth/authProvider';
import { ToastContainer } from 'react-toastify';
import { useThemeChange } from './context/theme/useThemeChange';
import { ThemeChangeProvider } from './context/theme/themeChangeProvider';
import 'react-toastify/dist/ReactToastify.css';

import { Routes } from './routes';

export function App() {
    const { themeStatus } = useThemeChange();

    return (
        <ThemeProvider theme={themeStatus ? themeLight : themeDark}>
            <GlobalStyle />
            <ToastContainer
                position={'top-center'}
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
            />
            <AuthProvider>
                <CartProvider>
                    <DishProvider>
                        <OrderProvider>
                            <PayProvider>
                                <Routes />
                            </PayProvider>
                        </OrderProvider>
                    </DishProvider>
                </CartProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeChangeProvider>
            <App />
        </ThemeChangeProvider>
    </StrictMode>
);
