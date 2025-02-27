import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 0.8rem;
    padding: 0.8rem 1.6rem;

    img {
        width: 15%;
        height: auto;
        object-fit: contain;
    }

    .order-info {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        width: 50%;
        font-family: 'Poppins', sans-serif;

        h2 {
            font-weight: 500;
            font-size: 1.6rem;
        }
        h3 {
            font-weight: 300;
            font-size: 1.2rem;
            margin-bottom: 0.8rem;
            line-height: 140%;
        }
        p {
            font-weight: 600;
            font-size: 1.2rem;
        }
        span {
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    }

    .order-price {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        justify-content: flex-end;
        align-items: center;
        width: 25%;
        font-family: 'Roboto', sans-serif;

        .order-price-text {
            font-weight: 500;
            font-size: 1.8rem;
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
        span {
            font-size: 1.8rem;
        }
        .order-panel {
            display: flex;
            gap: 1.4rem;
            justify-content: center;
            align-items: center;

            > button {
                border-radius: 0.5rem;
                padding: 0.4rem 0.8rem;
                align-self: baseline;
                background: ${({ theme }) => theme.COLORS.DARK_100};
                border: none;
                margin-bottom: -0.5rem;
                cursor: pointer;
                color: ${({ theme }) => theme.COLORS.TOMATO_300};
                svg {
                    margin-bottom: -0.2rem;
                }
            }
            > div {
                border-radius: 0.5rem;
                padding: 0.4rem 0.8rem;
                background: ${({ theme }) => theme.COLORS.DARK_100};
                font-size: 1.4rem;
                gap: 0.6rem;
                svg {
                    font-size: 1.4rem;
                }
            }
        }
    }
`;
