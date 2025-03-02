import { MainPage } from '../../components/MainPage';
import { Section, Form, DishImage, Tags } from './styles';
import { FiChevronLeft } from 'react-icons/fi';
import { PiUploadSimple } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { InputTag } from '../../components/InputTag';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';

export function NewDish() {
    const [tags, setTags] = useState([]);
    const [newTags, setNewTags] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [discount, setDiscount] = useState('0');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [dishId, setDishId] = useState('');

    const navigate = useNavigate();

    const selectOptions = [
        { label: '-', value: null },
        { label: 'Refeição', value: 'refeição' },
        { label: 'Sobremesa', value: 'sobremesa' },
        { label: 'Bebida', value: 'bebida' },
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

    const handleNavigate = () => {
        navigate('/');
    };

    function handleInsertImage(e) {
        const file = e.target.files[0];
        setImageFile(file);
    }

    function handleValidateForm() {
        const errors = {};

        if (newTags) {
            errors.tags = 'Adicione o ingrediente antes de adicionar o prato';
        }

        // Validação do nome
        if (!name.trim()) {
            errors.name = 'O nome do prato é obrigatório';
        }

        // Validação da categoria
        if (!category || category === '-') {
            errors.category = 'Selecione uma categoria válida';
        }

        // Validação do preço
        if (!price.trim()) {
            errors.price = 'O preço é obrigatório';
        } else {
            const priceValue = parseFloat(price.replace(',', '.'));
            if (isNaN(priceValue) || priceValue <= 0) {
                errors.price = 'Digite um preço válido';
            }
        }

        // Validação do desconto
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

        // Validação da descrição
        if (!description.trim()) {
            errors.description = 'A descrição é obrigatória';
        }

        // Validação dos ingredientes
        if (tags.length === 0) {
            errors.tags = 'Adicione pelo menos um ingrediente';
        }

        // Validação da imagem
        if (!imageFile) {
            errors.image = 'Selecione uma imagem para o prato';
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors,
        };
    }

    async function handleAddDish({
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
            name,
            category,
            price: parseFloat(price.replace(',', '.')),
            discount,
            description,
            ingredients: tags,
        };

        try {
            const response = await api.post('/dishes', data, {
                withCredentials: true,
            });
            // navigate('/');
            setDishId(response.data.dish_id);
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Não foi possível entrar.');
            }
        }
    }

    useEffect(() => {
        const dataImage = new FormData();
        dataImage.append('image', imageFile);
        dataImage.append('dish_id', dishId);

        const sendImage = async () => {
            try {
                await api.patch('/dishes/image', dataImage, {
                    withCredentials: true,
                });
                setImageFile(null);
                setName('');
                setCategory('');
                setPrice('');
                setDiscount('0');
                setDescription('');
                setTags([]);
                setNewTags('');
                toast.success('Prato adicionado com sucesso!');
                navigate('/');
            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error('Não foi possível entrar.');
                }
            }
        };

        dishId && imageFile && sendImage();
    }, [imageFile, dishId, navigate]);

    return (
        <MainPage>
            <Section>
                <button onClick={() => handleNavigate()}>
                    <p>
                        <FiChevronLeft size={28} />
                        Voltar
                    </p>
                </button>
                <h1>Novo prato</h1>
                <Form>
                    <DishImage>
                        <p>Imagem do prato</p>
                        <label htmlFor="dishImage">
                            <PiUploadSimple size={24} />
                            <p>
                                {imageFile
                                    ? imageFile.name
                                    : 'Adicionar imagem'}
                            </p>
                            <input
                                type="file"
                                id="dishImage"
                                onChange={handleInsertImage}
                            />
                        </label>
                    </DishImage>

                    <Input
                        className="dish-name"
                        Label="Nome"
                        placeholder="Ex.: Salada Ceasar"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <Select
                        className="dish-category"
                        Label="Categoria"
                        options={selectOptions}
                        placeholder="Refeição"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
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
                                            onClick={() => handleDelTag(tag)}
                                        />
                                    ))}
                                <InputTag
                                    placeholder={'Adicionar'}
                                    isNew
                                    onChange={(e) => setNewTags(e.target.value)}
                                    value={newTags}
                                    onClick={handleAddTag}
                                />
                            </div>
                        </Tags>
                        <Input
                            className="dish-discount"
                            Label="Desconto"
                            placeholder="Ex: 0,05"
                            onChange={(e) => setDiscount(e.target.value)}
                            value={discount}
                        />
                        <Input
                            className="dish-price"
                            Label="Preço"
                            placeholder="0,00"
                            currency={'R$'}
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
                    <Button
                        title={'Adicionar prato'}
                        onClick={() =>
                            handleAddDish({
                                name,
                                category,
                                price,
                                discount,
                                description,
                                tags,
                                imageFile,
                            })
                        }
                    />
                </Form>
            </Section>
        </MainPage>
    );
}
