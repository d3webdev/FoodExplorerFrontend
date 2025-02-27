import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
grid-area: footer;
background: ${({ theme }) => theme.COLORS.DARK_600};
font-family: "DM Sans", serif;
padding: 0 2.8rem;
> p {
    font-size: clamp(0.8rem, 2.5vw, 1.2rem);
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
}
`;

export const Logo = styled.div`
display: flex;
justify-content:left;
align-items: center;
font-family: 'Roboto', sans-serif;
font-weight: bold;
color: ${({theme})=>theme.COLORS.LIGHT_700};
gap: 0.8rem;

> img {
    height: 1.8rem;
    width: 1.8rem;
}

> p {
    font-size: 1.526rem;
    width: 11.4rem;
}


`;