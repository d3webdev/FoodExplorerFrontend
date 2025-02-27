import { MainPage } from '../../components/MainPage';
import { OrderItem } from '../../components/OrderItem';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { useOrder } from '../../context/order/useOrder';
import { usePay } from '../../context/pay/usePay';
import { useCart } from '../../context/cart/useCart';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { useState } from 'react';
import { Section, Order, OrderItens, Payment, Form, Footer } from './styles';

import dishAvt from '../../assets/dish_avt.png';

export function Pedido() {
    const { orderId, amount, itens, cleanOrder, isLoading } = useOrder();
    const { cleanCart } = useCart();
    const { sendPayment, cleanPayment } = usePay();
    const [method, setMethod] = useState('');
    const navigate = useNavigate();

    if (isLoading) return <h1>Carregando...</h1>;

    const handlePayment = async (status) => {
        if (!sendPayment) {
            toast.error('Função de pagamento não disponível');
            return;
        }

        if (amount === 0) {
            toast.warning('Não existem itens no pedido');
            return;
        }

        if (!method && status === 'paid') {
            toast.warning('Selecione um método de pagamento');
            return;
        }

        try {
            await sendPayment(orderId, amount, method, status);
            cleanOrder();
            cleanCart();
            cleanPayment();

            if (status === 'canceled') {
                toast.warning('Pedido cancelado');
                return;
            }

            navigate(`/pay/${orderId}`);
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error(error);
            }
        }
    };

    const selectOptions = [
        { label: ' - ', value: '' },
        { label: 'Cartão de Crédito', value: 'credit_card' },
        { label: 'Cartão de Débito', value: 'debit_card' },
        { label: 'Pix', value: 'pix' },
    ];

    const handleNavigate = () => {
        navigate('/');
    };

    return (
        <MainPage receipt={false}>
            <Section>
                <button onClick={() => handleNavigate()}>
                    <p>
                        <FiChevronLeft size={28} />
                        Voltar
                    </p>
                </button>
                <h1>Pedido</h1>
                <Order>
                    {itens && itens.length > 0 && (
                        <OrderItens>
                            {itens.map((item, index) => (
                                <OrderItem
                                    key={index}
                                    dish_id={item.dish_id}
                                    image={
                                        item.image
                                            ? `${api.defaults.baseURL}/image/${item.image}`
                                            : dishAvt
                                    }
                                    name={item.name}
                                    description={item.description}
                                    amount={item.amount}
                                    count={item.quantity}
                                    price={item.price}
                                />
                            ))}
                        </OrderItens>
                    )}
                    <Form id="payment-form">
                        <Payment>
                            <Select
                                ClassName="payment-method"
                                Label="Método de Pagamento"
                                id={'payment-method'}
                                name={'payment-method'}
                                options={selectOptions}
                                placeholder="Pagamento"
                                value={method}
                                onChange={(e) => setMethod(e.target.value)}
                            />
                            <div className="total">
                                <h3>Valor do Pedido</h3>
                                <p>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(amount)}
                                </p>
                            </div>
                        </Payment>
                        <Footer>
                            <Button
                                title="cancelar"
                                onClick={() => handlePayment('canceled')}
                            ></Button>
                            <Button
                                onClick={() => handlePayment('paid')}
                                title="Pagar"
                            ></Button>
                        </Footer>
                    </Form>
                </Order>
            </Section>
        </MainPage>
    );
}
