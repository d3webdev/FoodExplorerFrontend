import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;
    cursor: pointer;
    ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
    transition: font-size 0.3s ease;

    &:hover {
        font-size: 1.5rem;
    }
`;