import { Container } from './styles';
import { Header } from '../Header';
import { Footer } from '../Footer';

import PropTypes from 'prop-types';

export function MainPage({ children, receipt = true }) {
    return (
        <Container>
            <Header receipt={receipt}/>
            <main>{children}</main>
            <Footer />
        </Container>
    );
}

MainPage.propTypes = {
    children: PropTypes.node,
    receipt: PropTypes.bool,
};
