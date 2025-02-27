import { Container } from './styles';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Button } from '../../components/Button';
import { useNavigate, useParams } from 'react-router-dom';

export function PayConfirm() {
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;

    const handleNavigate = () => {
        navigate('/');
    };
    return (
        <Container>
            <div>
                <IoMdCheckmarkCircleOutline size={200} />

                <h1>Pagamento realizado com sucesso!</h1>
                <p>
                    Pedido Nº <span>{id}</span>
                </p>
                <Button title={'OK'} onClick={handleNavigate}></Button>
            </div>
        </Container>
    );
}
