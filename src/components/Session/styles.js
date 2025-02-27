import styled from 'styled-components';

export const Container = styled.section`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
gap: 2.4rem;

> h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
}
`;