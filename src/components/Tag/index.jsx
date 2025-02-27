import { Container } from './styles';
import PropTypes from 'prop-types';

export function Tag({ text }) {
    return <Container>{text}</Container>;
}

Tag.propTypes = {
    text: PropTypes.string.isRequired,
};
