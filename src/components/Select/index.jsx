import { Container } from './styles';
import PropTypes from 'prop-types';

export function Select({
    icon: Icon = null,
    Label = null,
    options = [],
    id = null,
    name = null,
    ClassName = null,
    ...rest
}) {
    return (
        <Container className={ClassName}>
            {Label && <label htmlFor={id}>{Label}</label>}
            <div>
                {Icon && <Icon size={20} />}
                <select {...rest} id={id} name={name}>
                    {options.length > 0 ? (
                        options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))
                    ) : (
                        <option value="">Sem opções disponíveis</option>
                    )}
                </select>
            </div>
        </Container>
    );
}

Select.propTypes = {
    icon: PropTypes.elementType,
    Label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    ClassName: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
        })
    ),
};
