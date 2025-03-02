import { Container, Nav, Logo, Order } from './styles';
import { FiMenu } from 'react-icons/fi';
import { PiReceipt } from 'react-icons/pi';
import { FiLogOut } from 'react-icons/fi';
import { Input } from '../Input';
import { Button } from '../Button';
import FoodExplorer from '../../assets/foodexplorer.svg';
import { FiSearch } from 'react-icons/fi';
import { SideMenu } from '../SideMenu';
import { useOrder } from '../../context/order/useOrder';
import { useDish } from '../../context/dish/useDish';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../../context/auth/useAuth';
import { useThemeChange } from '../../context/theme/useThemeChange';
import { useNavigate } from 'react-router-dom';

import { FiMoon } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';

export function Header({ receipt = true }) {
    const [menuActive, setMenuActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const { totalOrder } = useOrder();
    const { handleSearch } = useDish();
    const { user, signOut } = useAuth();
    const { themeStatus, toggleTheme } = useThemeChange();

    function handleTheme() {
        toggleTheme();
    }

    const navigate = useNavigate();

    const { role } = user;

    function handleSignOut() {
        signOut(user.email);
    }

    function handleNewDish() {
        navigate('/newdish');
    }

    function handleOrder() {
        totalOrder > 0 && navigate('/pedido/');
    }

    function handleInputSearch(e) {
        const search = e.target.value;
        setSearchTerm(search);
    }

    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm, handleSearch]);

    return (
        <Container>
            <Nav>
                <SideMenu
                    className="side-menu"
                    menuIsActive={menuActive}
                    onCloseMenu={() => setMenuActive(false)}
                />
                <button
                    className="btn-menu"
                    onClick={() => setMenuActive(true)}
                >
                    <FiMenu size={32} />
                </button>
                <Logo>
                    <div className="logo">
                        <img src={FoodExplorer} alt="Food Explorer" />
                        <p>food explorer</p>
                    </div>
                    {role === 'admin' && <button>Admin</button>}
                </Logo>
                <Input
                    icon={FiSearch}
                    placeholder="Busque por pratos ou ingredientes"
                    id={'search'}
                    name={'search'}
                    value={searchTerm}
                    ClassName="input-search"
                    onChange={(e) => handleInputSearch(e)}
                />
                {role !== 'admin' && receipt && (
                    <Order
                        className="btn-order-mb"
                        onClick={() => handleOrder()}
                    >
                        <PiReceipt size={32} />
                        <span>{totalOrder}</span>
                    </Order>
                )}
                {role !== 'admin' && receipt && (
                    <Button
                        className="btn-order"
                        Icon={PiReceipt}
                        title={'Pedidos'}
                        isHeader
                        onClick={() => handleOrder()}
                    />
                )}
                {role === 'admin' && (
                    <Button
                        className="btn-new-dish"
                        title={'Novo prato'}
                        isHeader
                        onClick={() => handleNewDish()}
                    />
                )}
                <button
                    className="btn-theme"
                    value="theme"
                    onClick={() => handleTheme()}
                >
                    {themeStatus ? <FiSun /> : <FiMoon />}
                </button>
                <button className="btn-logout" onClick={() => handleSignOut()}>
                    <FiLogOut size={32} />
                </button>
            </Nav>
        </Container>
    );
}

Header.propTypes = {
    receipt: PropTypes.bool,
};
