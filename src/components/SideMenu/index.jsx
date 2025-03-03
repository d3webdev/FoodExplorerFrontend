import { Container, Header, Main } from './styles';
import { FiSearch } from 'react-icons/fi';
import { PiX } from 'react-icons/pi';
import { Input } from '../Input';
import { useAuth } from '../../context/auth/useAuth';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

export function SideMenu({ menuIsActive, onCloseMenu }) {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const role = user.role;

    function handleSignOut() {
        signOut(user.email);
    }

    function handleNavigate() {
        navigate('/newdish');
    }

    return (
        <Container data-menu-active={menuIsActive}>
            <Header>
                <button aria-label={"Close"} onClick={onCloseMenu}>
                    <PiX /> Menu
                </button>
            </Header>
            <Main>
                <Input
                    icon={FiSearch}
                    id={'search-mb'}
                    name={'search-mb'}
                    placeholder="Busque por pratos ou ingredientes"
                />
                {role === 'admin' && (
                    <button aria-label={"New Dish"} type="button" onClick={() => handleNavigate()}>
                        <p>Novo prato</p>
                    </button>
                )}
                <button aria-label={"Logout"} type="button" onClick={handleSignOut}>
                    <p>Sair</p>
                </button>
            </Main>
        </Container>
    );
}

SideMenu.propTypes = {
    menuIsActive: PropTypes.bool,
    onCloseMenu: PropTypes.func,
};
