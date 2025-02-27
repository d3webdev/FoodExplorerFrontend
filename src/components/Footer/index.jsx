import { Container, Logo } from "./styles";
import FoodExplorer from "../../assets/foodexplorer_footer.svg";

export function Footer() {
    return (
        <Container>
            <Logo>
                <img src={FoodExplorer} alt="" />
                <p>footer explorer</p>
            </Logo>
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    );
}