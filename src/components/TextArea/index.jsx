import { Container } from './styles';
import PropTypes from 'prop-types';

export function TextArea({ Label = null, className = null, ...rest }) {
    return (
        <Container className={className}>
            {Label && <label htmlFor= {Label}>{Label}</label>}
            <div>
                <textarea id={Label} {...rest} />
            </div>
        </Container>
    );
}

TextArea.propTypes = {
    Label: PropTypes.string,
    className: PropTypes.string,
};
