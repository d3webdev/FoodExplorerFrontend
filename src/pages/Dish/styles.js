import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Ingredients = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 2.4rem;
    gap: 2.4rem;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        justify-content: center;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1.6rem;
    margin: 1.6rem 4rem 5.2rem;
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
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4.8rem;
    img {
        flex: 0 0 35%;
        width: 80%;
        height: 80%;
        object-fit: cover;
        margin-bottom: 1.6rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: column;
        gap: 1.6rem;

        img {
            width: 90%;
            height: 90%;
            object-fit: cover;
            margin-bottom: 1.6rem;
        }
    }
`;

export const About = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2.4rem;
    flex: 0 0 60%;

    > h1 {
        ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM};
    }

    > p {
        text-align: left;
        ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 0 0 100%;

        > h1 {
            font-weight: 500;
            font-family: 'Poppins', sans-serif;
            line-height: 100%;
            font-size: 2.8rem;
        }

        > p {
            text-align: center;
            font-weight: 300;
            font-family: 'Poppins', sans-serif;
            font-size: 1.6rem;
            line-height: 140%;
        }
    }
`;

export const Panel = styled.div`
    width: 100%;
    display: flex;
    gap: 1.6rem;

    > div {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 2.4rem;

        button {
            svg {
                font-size: 3rem;
            }
        }
    }

    button {
        max-width: 18.2rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        justify-content: center;
        button {
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
        }

        .btn-edit {
            font-size: 1.4rem;
        }
    }
`;
