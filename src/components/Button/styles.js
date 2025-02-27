import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 0.5rem;
    height: 4.8rem;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
    transition: all 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
        transform: scale(1.1);
    }

    svg {
        margin-right: 0.8rem;
    }
`;
