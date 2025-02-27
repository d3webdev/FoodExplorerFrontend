import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        > svg {
            font-size: 2rem;
        }
    }
`;