import { Container } from './styles';
import PropTypes from 'prop-types';

export function Session({title}) {
    return (
        <Container>
            <h1>{title}</h1>
        </Container>
    );
}

Session.propTypes = {
    title: PropTypes.string.isRequired,
};