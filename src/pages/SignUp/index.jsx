import { Container, Logo, Form } from './styles';
import logo from '../../assets/foodexplorer.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

export function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleNavigate = () => {
        navigate('/');
    }

    const handleSignUp = async () => {
        try {
            await api.post('/users', { name, email, password });
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error(error);
            }
        } finally {
            setName('');
            setEmail('');
            setPassword('');
            toast.success('Usuário cadastrado com sucesso');
            navigate('/');
        }
    }

    return (
        <Container>
            <Logo>
                <img src={logo} alt="" />
                <p>food explorer</p>
            </Logo>
            <Form>
            <h1>Crie sua conta</h1>
                <Input
                    icon={null}
                    id={'field0'}
                    Label={'Seu nome'}
                    type={'text'}
                    placeholder="Exemplo: Maria da Silva"
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    icon={null}
                    id={'field1'}
                    Label={'Email'}
                    type={'text'}
                    placeholder="Exemplo: exemplo@exemplo.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    icon={null}
                    id={'field2'}
                    Label={'Senha'}
                    type={'password'}
                    placeholder="No mínimo 6 caracteres"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="button" title={'Criar conta'} onClick={()=>handleSignUp()}/>
                <ButtonText onClick={()=>handleNavigate()} title={'Já tenho uma conta'} />
            </Form>
        </Container>
    );
}
