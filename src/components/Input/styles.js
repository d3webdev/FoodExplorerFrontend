import styled from 'styled-components';

export const Container = styled.div`
    > label {
        display: block;
        ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
        margin-bottom: 0.8rem;
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

        > span {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
            align-self: flex-end;
        }

        > input {
            flex: 1;
            width: 100%;
            background-color: transparent;
            border: none;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 1.6rem;
            margin-left: ${({ $hasCurrency }) =>
                $hasCurrency ? '-0.8rem' : '0'};
            outline: none;

            &::placeholder {
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
                ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
            }
        }
    }
`;
