import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: grid;
    grid-template-rows: 104px auto 77px;
    grid-template-areas: 
    'header'
    'content'
    'footer';

    > main {
        grid-area: content;
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 12.4rem;
        overflow-y: scroll;
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        grid-template-rows: 114px auto 77px;
        > main {
            padding: 0 1.6rem;
            margin: 0;
        }
    }    
`;
