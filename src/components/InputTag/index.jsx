import { Container } from './styles';
import { FiPlus, FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';

export function InputTag({ text, isNew = false, onClick, ...rest }) {
    let size = 0;
    if (text) {size = Math.max((text.length - 1), 1);}

    return (
        <Container $isNew={isNew}>
            <input type="text" value={text} disabled={!isNew} size={size} {...rest} />
            <button type="button" onClick={onClick}>
                {isNew ? <FiPlus size={16} /> : <FiX size={16} />}
            </button>
        </Container>
    );
}

InputTag.propTypes = {
    text: PropTypes.string,
    isNew: PropTypes.bool,
    onClick: PropTypes.func,
};
