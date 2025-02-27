import styled from "styled-components";

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

        > textarea {
            flex: 1;
            width: 100%;
            min-height: 10rem;
            background-color: transparent;
            border: none;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 1.6rem;
            margin-left: 1.6rem;
            outline: none;

            &::placeholder {
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
                ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
            }
        }
    }
`;