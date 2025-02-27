import { Banner } from './styles';
import image1 from '../../assets/image1.png';
import { MainPage } from '../../components/MainPage';
import { DisplayDishes } from '../../components/DisplayDishes';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DISH_CATEGORIES from '../../services/dishesType';
import { useDish } from '../../context/dish/useDish';


export function Home() {
    const [dishes, setDishes] = useState([]);
    const [refeicao, setRefeicao] = useState([]);
    const [sobremesa, setSobremesa] = useState([]);
    const [bebida, setBebida] = useState([]);

    const { listDish, dishLoading } = useDish();

    useEffect(() => {
        if (dishLoading) {
            return;
        }
        const listDishFormatted = listDish.map((dish) => ({
            ...dish,
            price: parseFloat(dish.price),
        }));

        setDishes(listDish);

        setRefeicao(
            listDishFormatted.filter(
                (dish) => dish.category === DISH_CATEGORIES.REFEICAO
            )
        );

        setSobremesa(
            listDishFormatted.filter(
                (dish) => dish.category === DISH_CATEGORIES.SOBREMESA
            )
        );

        setBebida(
            listDishFormatted.filter(
                (dish) => dish.category === DISH_CATEGORIES.BEBIDA
            )
        );
    }, [listDish, dishLoading]);

    const toggleFavorite = async (id) => {
        const category = dishes.find((dish) => dish.id === id).category;

        const updateDishes = dishes.map((dish) => {
            if (dish.id === id) {
                return { ...dish, favorite: !dish.favorite };
            }

            return dish;
        });

        switch (category) {
            case 'refeição':
                setRefeicao(
                    updateDishes.filter(
                        (dish) => dish.category === DISH_CATEGORIES.REFEICAO
                    )
                );
                break;
            case 'sobremesa':
                setSobremesa(
                    updateDishes.filter(
                        (dish) => dish.category === DISH_CATEGORIES.SOBREMESA
                    )
                );
                break;
            case 'bebida':
                setBebida(
                    updateDishes.filter(
                        (dish) => dish.category === DISH_CATEGORIES.BEBIDA
                    )
                );
                break;
            default:
                break;
        }

        setDishes(updateDishes);

        const dish = dishes.find((dish) => dish.id === id);

        try {
            if (dish.favorite) {
                await api.delete(`/favorites/${id}`, {
                    withCredentials: true,
                });
            } else {
                await api.post(`/favorites/${id}`, null, {
                    withCredentials: true,
                });
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Não foi possível favoritar.');
            }
        }
    };

    return (
        <MainPage>
            <Banner>
                <img src={image1} alt="cookies and fruits" />
                <div>
                    <h2>Sabores inigualáveis</h2>
                    <p>
                        Sinta o cuidado do preparo com ingredientes
                        selecionados.
                    </p>
                </div>
            </Banner>
            {refeicao.length > 0 && (
                <DisplayDishes
                    title={'Pratos principais'}
                    dishes={refeicao}
                    onToggleFavorite={toggleFavorite}
                />
            )}
            {sobremesa.length > 0 && (
                <DisplayDishes
                    title={'Sobremesa'}
                    dishes={sobremesa}
                    onToggleFavorite={toggleFavorite}
                />
            )}
            {bebida.length > 0 && (
                <DisplayDishes
                    title={'Bebidas'}
                    dishes={bebida}
                    onToggleFavorite={toggleFavorite}
                />
            )}
        </MainPage>
    );
}
