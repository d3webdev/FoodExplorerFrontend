import styled from 'styled-components';
//import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.aside`
    display: grid;
    grid-template-rows: 114px auto 77px;
    grid-template-areas: 'header' 'main';
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    width: 100%;
    height: 90vh;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-active="true"] {
      transform: translateX(0);
    }
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    grid-area: header;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.DARK_700};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    padding: 5.6rem 2.8rem 2.4rem;

    > button {
        display: flex;
        gap: 1.6rem;
        align-items: center;
        background: transparent;
        border: none;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Roboto', sans-serif;
        font-weight: normal;
        font-size: 2.1rem;

        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 3.6rem;
        }
    }
`;

export const Main = styled.main`
    display: flex;
    grid-area: main;
    flex-direction: column;
    justify-content: start;
    padding: 3.6rem  2.8rem 0;

    > button:first-of-type {
        margin-top: 3.6rem;
    }

    button {
        background: transparent;
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        cursor: pointer;
        width: 100%;
        padding: 1rem;
        > p {
            font-family: 'Popins', sans-serif;
            font-size: 2.4rem;
            font-weight: 300;
            text-align: left;
            line-height: 140%;
        }
    }

`;
