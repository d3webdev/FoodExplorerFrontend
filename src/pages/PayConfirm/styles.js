import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100vh;

    > div {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        padding: 2rem 2.4rem;
        text-align: center;
        margin-top: -20rem;
        > svg {
            color: ${({ theme }) => theme.COLORS.MINT_100};
        }
        p {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
            font-size: 1.2rem;
            margin-bottom: 4.8rem;
            > span {
                color: ${({ theme }) => theme.COLORS.MINT_100};
                font-weight: 700;
            }
        }
        > h1 {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
            font-size: 2.8rem;
        }

        > button {
            max-width: 30rem;
        }
    }
`;
