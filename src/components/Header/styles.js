import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.DARK_700};
`;

export const Nav = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    grid-area: header;
    gap: 3.2rem;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    padding: 2.8rem 12.4rem;
    transition: all 0.3s ease;

    .input-search {
        flex: 1 1 70%;
    }

    .btn-menu {
        background: transparent;
        border: none;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .btn-theme {
        background: transparent;
        border: none;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        svg {
            font-size: 3.2rem;
        }
        &:hover {
            transform: scale(1.1);
        }
    }

    .btn-logout {
        background: transparent;
        border: none;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .btn-menu,
    .btn-order-mb {
        display: none;
    }

    .btn-order,
    .btn-new-dish {
        flex: 0 0 21.6rem;
        > svg {
            width: 3.2rem;
            height: 3.2rem;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 5.6rem 2.8rem 2.4rem;
        margin: 0 auto;

        .btn-menu,
        .btn-order-mb {
            display: block;
        }

        .btn-order,
        .btn-logout,
        .btn-new-dish,
        .input-search {
            display: none;
        }
    }
`;

export const Logo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 0 0 20%;
    align-items: end;
    justify-content: center;
    gap: 0rem;
    padding-right: 3.2rem;
    font-size: 2.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    .logo {
        display: flex;
        gap: 0.8rem;
        > img {
            width: 2.5rem;
            height: 2.5rem;
        }
    }

    > button {
        border: none;
        background: transparent;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex: 1;
        gap: 0.8rem;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-right: 0;
    }
`;

export const Order = styled.button`
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-top: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    position: relative;

    > span {
        height: 2rem;
        width: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: 1.8rem;
        right: -0.6rem;
        border-radius: 100%;

        background: ${({ theme }) => theme.COLORS.TOMATO_100};
        ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
    }
`;
