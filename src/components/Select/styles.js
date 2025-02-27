import styled from 'styled-components';

export const Container = styled.div`
    > label {
        display: block;
        ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
        margin-bottom: 1.6rem;
    }
    > div {
        width: 100%;
        display: flex;
        gap: 1.4rem;
        align-items: center;
        padding: 1.6rem 1.4rem;
        border-radius: 0.8rem;
        border: none;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        select {
            background-color: transparent;
            border: none;
            padding: 0 1.6rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};

            flex: 1;
            outline: none;

            cursor: pointer;
            padding-right: 1.5rem; /* Espaço para o ícone */

            &:focus {
                padding: 0 1.6rem;
            }

            option {
                background: ${({ theme }) => theme.COLORS.DARK_900};
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
                padding: 0 1.6rem;
                border-radius: 0.8rem;
            }
        }
    }
`;
