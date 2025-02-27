import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
    align-items: center;
    padding-top: 1.6rem;
    margin: 1.6rem 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > button {
        align-self: flex-start;
        border: none;
        background: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        cursor: pointer;

        > p {
            ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
            font-size: 2rem;
            display: flex;
            align-items: center;
        }
    }

    > h1 {
        align-self: flex-start;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
    }
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin: 0;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        gap: 5.2rem;
        margin: 5.2rem 0;
    }
`;

export const Payment = styled.div`
    display: flex;
    gap: 2.4rem;

    .payment-method{
        justify-content: center;
        width: 100%;
    }

    .total {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        h3 {
            ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
            font-size: 1.6rem;
            margin-bottom: 1.6rem;
        }

        p {
            ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD};
            color: ${({ theme }) => theme.COLORS.CAKE_200};
            font-size: 3.2rem;
            margin-bottom: 1.6rem;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: row;
    }

`;

export const Footer = styled.div`
    display: flex;
    gap: 2.4rem;
    width: 100%;

    button:first-of-type {
        background: ${({ theme }) => theme.COLORS.DARK_900};
        &:hover {
            background: ${({ theme }) => theme.COLORS.LIGHT_700};
        }
    }

    > button {
        background: ${({ theme }) => theme.COLORS.TOMATO_400};
        &:hover {
            background: ${({ theme }) => theme.COLORS.TOMATO_200};
        }
    }
    
`;

export const Order = styled.div`
    display: flex;
    gap: 2.4rem;
    width: 100%;

@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    }
`;

export const OrderItens = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    width: 100%;
`;
