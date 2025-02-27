import styled from 'styled-components';

export const Container = styled.div`
    padding: 0.4rem 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
    border-radius: 0.5rem;
`;
