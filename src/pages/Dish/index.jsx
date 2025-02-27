import { Ingredients, Section, Item, Panel, About } from './styles';
import { useParams } from 'react-router-dom';
import { MainPage } from '../../components/MainPage';
import { FiChevronLeft } from 'react-icons/fi';
import { Tag } from '../../components/Tag';
import { Counter } from '../../components/Counter';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { PiReceipt } from 'react-icons/pi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/auth/useAuth';
import { useDish } from '../../context/dish/useDish';
import { useOrder } from '../../context/order/useOrder';
import { useCart } from '../../context/cart/useCart';

import dishAvt from '../../assets/dish_avt.png';

export function Dish() {
    const params = useParams();
    const dish_id = Number(params.id);

    const { updateOrder } = useOrder();
    const { getDish } = useDish();
    const { getCount } = useCart();
    const { user } = useAuth();

    const [count, setCount] = useState(0);
    const [dish, setDish] = useState(null);
    const [amount, setAmount] = useState(0);
    const [image, setImage] = useState(null);

    const role = user.role;
    const navigate = useNavigate();


    const handleNavigate = () => {
        navigate('/');
    };

    const handleEditDish = () => {
        navigate('/editdish/' + dish_id);
    };

    const handleOrder = async () => {
        try {
            const response = await updateOrder(dish_id, count);

            if (response) {
                toast.success('Prato adicionado ao carrinho');
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                return '0';
            }
        }
    };

    useEffect(() => {
        getDish(dish_id).then((response) => {
            setDish(response);
            setCount(getCount(dish_id));
        });
    }, [getDish, dish_id, getCount]);

    useEffect(() => {
        dish && setAmount(count * dish.price);
    }, [setAmount, count, dish]);

    useEffect(() => {
        setImage(
            dish?.image
                ? api.defaults.baseURL + '/image/' + dish.image
                : dishAvt
        );
    }, [dish]);

    return (
        <MainPage>
            <Section>
                <button onClick={() => handleNavigate()}>
                    <p>
                        <FiChevronLeft size={28} />
                        Voltar
                    </p>
                </button>
                {dish && (
                    <Item>
                        <img src={image} alt={dish.name} />
                        <About>
                            <h1>{dish.name}</h1>
                            <p>{dish.description}</p>
                            <Ingredients>
                                {dish.ingredients?.map((ingredient, index) => (
                                    <Tag key={index} text={ingredient.name} />
                                ))}
                            </Ingredients>
                            {role !== 'admin' ? (
                                <Panel>
                                    <Counter id={dish.id} initValue={count} />
                                    <Button
                                        Icon={PiReceipt}
                                        title={'Incluir'}
                                        price={amount}
                                        onClick={() => handleOrder()}
                                    />
                                </Panel>
                            ) : (
                                <Panel>
                                    <Button
                                        className={'btn-edit'}
                                        title={'Editar prato'}
                                        onClick={() => handleEditDish()}
                                    />
                                </Panel>
                            )}
                        </About>
                    </Item>
                )}
            </Section>
        </MainPage>
    );
}
