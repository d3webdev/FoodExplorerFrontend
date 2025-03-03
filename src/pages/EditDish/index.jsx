import { MainPage } from '../../components/MainPage';
import { Section, Form, DishImage, Tags, Footer } from './styles';
import { FiChevronLeft } from 'react-icons/fi';
import { PiUploadSimple } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { InputTag } from '../../components/InputTag';
import { toast } from 'react-toastify';
import DISH_CATEGORIES from '../../services/dishesType';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useDish } from '../../context/dish/useDish';

export function EditDish() {
    const [tags, setTags] = useState([]);
    const [newTags, setNewTags] = useState('');
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [discount, setDiscount] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const params = useParams();
    const [dish_id, setDishId] = useState(Number(params.id));

    const { getDish, mutateDish } = useDish();

    const navigate = useNavigate();
    const selectOptions = [
        { label: '-', value: null },
        { label: 'Refeição', value: DISH_CATEGORIES.REFEICAO },
        { label: 'Sobremesa', value: DISH_CATEGORIES.SOBREMESA },
        { label: 'Bebida', value: DISH_CATEGORIES.BEBIDA },
    ];

    function handleAddTag() {
        if (newTags) {
            setTags((prevTags) => [...prevTags, newTags]);
            setNewTags('');
        }
    }

    function handleDelTag(tag) {
        setTags((prevTags) => prevTags.filter((item) => item !== tag));
    }

    function handleInsertImage(e) {
        const file = e.target.files[0];
        setImageFile(file);
        setImage(file.name);
    }

    function handleValidateForm() {
        const errors = {};

        if (newTags) {
            errors.tags = 'Adicione o ingrediente antes de adicionar o prato';
        }

        if (!name.trim()) {
            errors.name = 'O nome do prato é obrigatório';
        }

        if (!category || category === '-') {
            errors.category = 'Selecione uma categoria válida';
        }

        if (!price) {
            errors.price = 'O preço é obrigatório';
        } else {
            const priceString = String(price);
            const priceValue = parseFloat(priceString.replace(',', '.'));
            if (isNaN(priceValue) || priceValue <= 0) {
                errors.price = 'Digite um preço válido';
            }
        }

        if (discount) {
            const discountValue = parseFloat(discount.replace(',', '.'));
            if (
                isNaN(discountValue) ||
                discountValue < 0 ||
                discountValue >= 1
            ) {
                errors.discount = 'O desconto deve ser um valor entre 0 e 1';
            }
        }

        if (!description.trim()) {
            errors.description = 'A descrição é obrigatória';
        }

        if (tags.length === 0) {
            errors.tags = 'Adicione pelo menos um ingrediente';
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors,
        };
    }

    async function handleEditDish({
        id,
        name,
        category,
        price,
        discount,
        description,
        tags,
    }) {
        const validation = handleValidateForm();

        if (!validation.isValid) {
            Object.values(validation.errors).forEach((error) => {
                toast.error(error);
            });
            return;
        }

        const data = {
            id,
            name,
            category,
            price: parseFloat(String(price).replace(',', '.')),
            discount,
            description,
            ingredients: tags,
        };
        try {
            await api.put('/dishes', data, {
                withCredentials: true,
            });
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Não foi possível entrar.');
            }
        }

        await sendImage();

        await mutateDish();

        setImageFile(null);
        setImage(null);
        setName('');
        setCategory('');
        setPrice('');
        setDiscount('0');
        setDescription('');
        setTags([]);
        setNewTags('');

        toast.success('Prato atualizado com sucesso!');
        navigate('/');
    }

    async function sendImage() {
        if (!imageFile) return;

        const dataImage = new FormData();
        dataImage.append('image', imageFile);
        dataImage.append('dish_id', dish_id);

        try {
            await api.patch('/dishes/image', dataImage, {
                withCredentials: true,
            });
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Não foi possível entrar.');
            }
        }
    }

    async function handleDeleteDish() {
        try {
            await api.delete(`/dishes/${dish_id}`, {
                withCredentials: true,
            });
            setDishId(null);
            await mutateDish();

            toast.success('Prato excluído com sucesso!');
            navigate('/');
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Erro ao excluir prato');
            }
        }
    }

    useEffect(() => {
        if (!dish_id) return;
        (async () => {
            try {
                const response = await getDish(dish_id);
                setName(response.name);
                setCategory(response.category);
                setPrice(response.price);
                setDescription(response.description);
                setImage(response.image);
                setTags(
                    response.ingredients.map((ingredient) => ingredient.name)
                );
            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error('Erro ao buscar prato');
                }
            }
        })();
    }, [getDish, dish_id]);

    const handleNavigate = () => {
        navigate('/');
    };

    return (
        <MainPage>
            <Section>
                <button aria-label={"Back page"} onClick={() => handleNavigate()}>
                    <p>
                        <FiChevronLeft size={28} />
                        Voltar
                    </p>
                </button>
                <h1>Editar prato</h1>
                <Form>
                    <DishImage>
                        <p>Imagem do prato</p>
                        <label htmlFor="dishImage">
                            <PiUploadSimple size={24} />
                            <p>{image ? image : 'Adicionar imagem'}</p>
                            <input
                                type="file"
                                id="dishImage"
                                onChange={handleInsertImage}
                            />
                        </label>
                    </DishImage>

                    <Input
                        className="dish-name"
                        id={'name'}
                        Label="Nome"
                        value={name}
                        autocomplete={"off"}
                        placeholder="Ex.: Salada Ceasar"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Select
                        className="dish-category"
                        id={'category'}
                        Label="Categoria"
                        value={category}
                        options={selectOptions}
                        placeholder="Refeição"
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <div className="dish-ingredients-price">
                        <Tags>
                            <p>Ingredientes</p>
                            <div>
                                {tags &&
                                    tags.map((tag, index) => (
                                        <InputTag
                                            key={index}
                                            value={tag}
                                            id={index}
                                            onClick={() => handleDelTag(tag)}
                                        />
                                    ))}
                                <InputTag
                                    placeholder={'Adicionar'}
                                    isNew
                                    id={'newTag'}
                                    onChange={(e) => setNewTags(e.target.value)}
                                    value={newTags}
                                    onClick={handleAddTag}
                                />
                            </div>
                        </Tags>
                        <Input
                            className="dish-discount"
                            id={'discount'}
                            Label="Desconto"
                            placeholder="Ex: 0,05"
                            onChange={(e) => setDiscount(e.target.value)}
                            value={discount}
                        />
                        <Input
                            className="dish-price"
                            id={'price'}
                            Label="Preço"
                            currency={'R$'}
                            placeholder="0,00"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                        />
                    </div>
                    <TextArea
                        className="dish-description"
                        Label="Descrição"
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />

                    <Footer>
                        <Button
                            title={'Excluir prato'}
                            onClick={() => handleDeleteDish()}
                        />
                        <Button
                            title={'Editar prato'}
                            onClick={() =>
                                handleEditDish({
                                    id: dish_id,
                                    name,
                                    category,
                                    price,
                                    discount,
                                    description,
                                    tags,
                                })
                            }
                        />
                    </Footer>
                </Form>
            </Section>
        </MainPage>
    );
}
