import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Logo = styled.div`
    display: flex;
    width: 31.6rem;
    gap: 1.6rem;
    margin-bottom: 7.3rem;

    > p {
        font-family: 'Roboto', serif;
        font-size: 3.8rem;
        font-weight: bold;
    }
`;

export const Form = styled.form`
    display: flex;
    width: 54rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 3.2rem;
    border-radius: 1.6rem;
    
    background: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 6.4rem;

    h1 {
        ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
    }

    div {
        width: 100%;
    }
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 31.6rem;
        background-color: transparent;
        padding: 0;

        h1 {
            display: none;
        }
    }
`;
