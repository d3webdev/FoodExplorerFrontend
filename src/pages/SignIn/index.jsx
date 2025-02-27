import { Container, Logo, Form } from './styles';
import logo from '../../assets/foodexplorer.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/useAuth';
import { useState } from 'react';


export function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { signIn } = useAuth();

    function handleSignIn () {
        signIn({ email, password });
    }

    const handleNavigate = () => {
        navigate('/register');
    }

    return (
        <Container>
            <Logo>
                <img src={logo} alt="" />
                <p>food explorer</p>
            </Logo>
            <Form>
                <h1>Faça login</h1>
                <Input
                    icon={null}
                    Label={'Login'}
                    type={'text'}
                    placeholder="Exemplo: exemplo@exemplo.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    icon={null}
                    Label={'Senha'}
                    type={'password'}
                    placeholder="No mínimo 6 caracteres"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="button" title={'Entrar'} onClick={handleSignIn} />
                <ButtonText onClick={()=>handleNavigate()} title={'Criar uma conta'}  />
            </Form>
        </Container>
    );
}
