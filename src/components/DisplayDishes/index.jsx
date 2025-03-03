import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Counter } from '../Counter';
import { Container, Dishes, HeartIcon, PiPencilIcon } from './styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/useAuth';
import { api } from '../../services/api';
import dishAvt from '../../assets/dish_avt.png';

export function DisplayDishes({ title, dishes, onToggleFavorite }) {
    const dishesRef = useRef(null);

    const navigate = useNavigate();
    const { user } = useAuth();
    const role = user.role;

    const prev = () => {
        if (dishesRef.current) {
            dishesRef.current.scrollLeft -= 300;
        }
    };

    const next = () => {
        if (dishesRef.current) {
            dishesRef.current.scrollLeft += 300;
        }
    };

    const handleDish = (id) => {
        navigate('/dish/' + id);
    };

    return (
        <Container className="dish-display" >
            <h1>{title}</h1>
            <button className="prev" aria-label={"Back page"} onClick={prev}>
                ❮
            </button>
            <Dishes ref={dishesRef}>
                {dishes.map((dish, index) => (
                    <div key={index} className={`item`}>
                        <div className="dish-image">
                            {dish.image ? (
                                <img
                                    src={`${api.defaults.baseURL}/image/${dish.image}`}
                                    alt={dish.name}
                                />
                            ) : (
                                <img src={dishAvt} alt={dish.name} />
                            )}
                            {role === 'admin' ? (
                                <button aria-label={"Edit dish"} onClick={() => handleDish(dish.id)}>
                                    <PiPencilIcon size={24} />
                                </button>
                            ) : (
                                <button
                                    aria-label={"Favorite dish"}
                                    onClick={() => onToggleFavorite(dish.id)}
                                >
                                    <HeartIcon
                                        $dishfavorite={!!dish.favorite}
                                        size={24}
                                    />
                                </button>
                            )}
                        </div>

                        <h3>{`${dish.name} >`}</h3>

                        {role !== 'admin' && (
                            <p className="dish-descri">{dish.description}</p>
                        )}
                        <p className="dish-price">
                            {dish.price
                                ? new Intl.NumberFormat('pt-BR', {
                                      style: 'currency',
                                      currency: 'BRL',
                                  }).format(dish.price)
                                : ''}
                        </p>

                        {role !== 'admin' && (
                            <div className="dish-panel">
                                <Counter id={dish.id} initValue={0} />
                                <Button
                                    title={'Adicionar'}
                                    onClick={() => handleDish(dish.id)}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </Dishes>
            <button  aria-label={"Next"} className="next" onClick={next}>
                ❯
            </button>
        </Container>
    );
}

DisplayDishes.propTypes = {
    title: PropTypes.string,
    dishes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number,
            image: PropTypes.string,
            favorite: PropTypes.bool,
            ingredients: PropTypes.arrayOf(PropTypes.object),
            $dishfavorite: PropTypes.bool,
        })
    ),
    onToggleFavorite: PropTypes.func,
};
