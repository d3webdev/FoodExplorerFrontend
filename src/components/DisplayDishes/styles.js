import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { PiPencilSimple } from 'react-icons/pi';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    position: relative;
    overflow: hidden;
    margin-bottom: 4.8rem;
    padding: 0 0.8rem;

    > h1 {
        ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        margin-bottom: 2.4rem;
        padding: 0 0.8rem;

        > h1 {
            ${({ theme }) => theme.FONTS.POPPINS_200_MEDIUM};
            font-size: 1.8rem;
        }
        .prev,
        .next {
            display: none;
        }
    }

    .prev,
    .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 1rem;
        font-size: 2.4rem;
        cursor: pointer;
        z-index: 10;
    }

    .prev {
        left: 1rem;
    }

    .next {
        right: 1rem;
    }
`;

export const Dishes = styled.div`
    display: flex;
    transition: transform 0.5s ease;
    overflow-y: scroll;
    scroll-behavior: smooth;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    -webkit-overflow-scrolling: touch;

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 48px;
        bottom: 0;
        width: 200px;
        pointer-events: none;
        z-index: 1;
    }

    &::before {
        left: 0;
        background: ${({ theme }) => theme.COLORS.GRADIENTE_RIGHT_300};
    }

    &::after {
        right: 0;
        background: ${({ theme }) => theme.COLORS.GRADIENTE_LEFT_300};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        &::before,
        &::after {
            top: 24px;
            width: 60px;
        }
    }

    .item {
        min-width: 25rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        flex: 0 0 28%;
        /* width: 30.4rem; */
        position: relative;
        padding: 2.4rem;

        .dish-image {
            display: flex;
            justify-content: center;
            margin-top: 2.4rem;

            button {
                position: absolute;
                top: 2rem;
                right: 2rem;
                background-color: transparent;
                border: none;
                cursor: pointer;
            }

            /* svg {
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
                fill: ${({ $dishfavorite, theme }) => $dishfavorite ? theme.COLORS.DARK_100 : theme.COLORS.LIGHT_100};
            } */

            img {
                width: 17.6rem;
            }
        }

        h3 {
            text-align: center;
            min-height: calc(1.8em * 2);
            margin-top: 1.2rem;
            ${({ theme }) => theme.FONTS.POPPINS_300_BOLD};
        }

        .dish-descri {
            margin-top: 1.2rem;
            text-align: center;
            ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        .dish-price {
            margin-top: 1.2rem;
            margin-bottom: 1.2rem;
            ${({ theme }) => theme.FONTS.ROBOTO_BIGGEST_REGULAR};
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }

        .dish-panel {
            display: flex;
            width: 60%;
            min-width: 200px;
            gap: 1.6rem;
            > button {
                margin-top: 1.2rem;
                height: 4.8rem;
            }
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            h3 {
                margin-top: 1.2rem;
                ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
            }

            .dish-image {
                img {
                    width: 8.8rem;
                }
            }

            .dish-descri {
                display: none;
            }

            .dish-price {
                ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
            }

            .dish-panel {
                display: block;
                width: 16.2rem;
                min-width: 10rem;
                > button {
                    margin-top: 1.2rem;
                    height: 3.2rem;
                }
            }
        }
    }
`;

export const HeartIcon = styled(FiHeart)`
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    fill: ${({ $dishfavorite, theme }) => $dishfavorite ? theme.COLORS.LIGHT_100 : theme.COLORS.DARK_100};
`;

export const PiPencilIcon = styled(PiPencilSimple)`
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;

