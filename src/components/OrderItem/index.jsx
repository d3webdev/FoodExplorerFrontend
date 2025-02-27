import { Container } from './styles';
import { Counter } from '../Counter';
import { PiTrashBold } from 'react-icons/pi';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useOrder } from '../../context/order/useOrder';
import { useState } from 'react';

export function OrderItem({
    dish_id,
    image,
    name,
    description,
    amount,
    count,
    price,
}) {
    const [resetStatus, setResetStatus] = useState(false);

    const { updateOrder } = useOrder();

    const handleCountChange = async (count) => {
        try {
            await updateOrder(dish_id, count);
        } catch (error) {
            toast.error('Não foi possível atualizar o pedido.' + error);
        }
    };

    const handleDeleteItem = () => {
        setResetStatus(true);
        setTimeout(() => {
            setResetStatus(false);
        }
        , 0);
        updateOrder(dish_id, 0);
    };

    return (
        <Container>
            <img src={image} alt={name} />
            <div className="order-info">
                <h2>{name}</h2>
                <h3>{description}</h3>
                <p>
                    Preço unidade:{' '}
                    <span>
                        {price
                            ? new Intl.NumberFormat('pt-BR', {
                                  style: 'currency',
                                  currency: 'BRL',
                              }).format(price)
                            : ''}
                    </span>
                </p>
                <p>
                    Quantidade: <span>{count}</span>
                </p>
            </div>
            <div className="order-price">
                <p className="order-price-text">
                    {amount
                        ? new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                          }).format(amount)
                        : ''}
                </p>
                <div className="order-panel">
                    <Counter
                        id={dish_id}
                        initValue={count}
                        reset={resetStatus}
                        onCountChange={handleCountChange}
                    />
                    <button onClick={() => handleDeleteItem(dish_id)}>
                        <PiTrashBold size={16} />
                    </button>
                </div>
            </div>
        </Container>
    );
}

OrderItem.propTypes = {
    dish_id: PropTypes.number.isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};
