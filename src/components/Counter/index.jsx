import { Container } from './styles';
import { useState, useEffect, useRef } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { SoundsUtils } from '../../utils/soundsUtils';
import { useCart } from '../../context/cart/useCart';

export function Counter({ id, initValue, onCountChange, reset = false }) {
    const [count, setCount] = useState(initValue);
    const { getCount, updateCount } = useCart();
    const soundUtils = useRef(null);

    useEffect(() => {
        soundUtils.current = new SoundsUtils();
    }, []);

    useEffect(() => {
        const dishCount = getCount(id);
        dishCount > 0 && setCount(dishCount);
    }, [id, getCount, initValue]);

    const handleCount = (operation) => {
        soundUtils.current?.playClick();

        const countUpdated = operation === 'plus' ? count + 1 : count - 1;
        updateCount(id, countUpdated);
        onCountChange?.(countUpdated);
    };

    useEffect(() => {
        if (reset) {
            setCount(0);
            updateCount(id, 0);
        }
    }, [reset, updateCount, id]);

    return (
        <Container>
            <button type="button" aria-label="Minus counter" onClick={() => handleCount('minus')}>
                <FiMinus />
            </button>
            <p>{count < 10 ? `0${count}` : count}</p>
            <button type="button" aria-label="Plus counter" onClick={() => handleCount('plus')}>
                <FiPlus />
            </button>
        </Container>
    );
}

Counter.propTypes = {
    id: PropTypes.number.isRequired,
    initValue: PropTypes.number.isRequired,
    reset: PropTypes.bool,
    onCountChange: PropTypes.func,
};
