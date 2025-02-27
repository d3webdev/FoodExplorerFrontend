import { Container } from './styles';
import { useOrder } from '../../context/order/useOrder';
import { SoundsUtils } from '../../utils/soundsUtils';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export function Button({
    title,
    Icon = null,
    price = null,
    isHeader = false,
    ...rest
}) {
    const { totalOrder } = useOrder();
    const soundUtils = useRef(null);

    useEffect(() => {
        soundUtils.current = new SoundsUtils();
    }, []);

    function handleClick(e) {
        soundUtils.current?.playClick();
        if (rest.onClick) {
            rest.onClick(e);
        }
    }

    return (
        <Container type="button" {...rest} onClick={handleClick}>
            {Icon && <Icon size={20} />}
            {price != 0 || price == null ? title : 'Adicione um prato'}
            {price && price != 0
                ? ' . ' +
                  new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                  }).format(price)
                : ''}
            {Icon &&
                Icon.name === 'PiReceipt' &&
                isHeader &&
                (totalOrder === 0 ? ' (0)' : ` ${totalOrder}`)}
        </Container>
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    Icon: PropTypes.elementType,
    price: PropTypes.number,
    isHeader: PropTypes.bool,
};
