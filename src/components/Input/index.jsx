import { Container } from './styles';
import PropTypes from 'prop-types';

export function Input({
    icon: Icon = null,
    Label = null,
    id = null,
    name = null,
    currency = null,
    ClassName = null,
    ...rest
}) {
    return (
        <Container className={ClassName ? ClassName : ''} $hasCurrency={!!currency}>
            {Label && <label htmlFor={id}>{Label}</label>}
            <div>
                {Icon && <Icon size={20} />}
                {currency && <span>{currency}</span>}
                <input id={id} name={name} {...rest} />
            </div>
        </Container>
    );
}

Input.propTypes = {
    isnew: PropTypes.bool,
    icon: PropTypes.elementType,
    id: PropTypes.string,
    name: PropTypes.string,
    Label: PropTypes.string,
    currency: PropTypes.string,
    ClassName: PropTypes.string,
};
