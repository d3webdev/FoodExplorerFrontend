import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Banner = styled.div`
    display: flex;
    height: 26rem;
    align-items: center;
    justify-content: end;
    margin: 19.4rem 0 6.2rem 2rem;
    padding: 3.6rem 2rem 2.2rem 0;
    position: relative;
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.COLORS.GRADIENTE_200};
    > img {
        height: 41.2rem;
        width: 65.6rem;
        position: absolute;
        left: -3rem;
        bottom: 0;
    }

    > div {
        z-index: 1;
        width: 50%;
        h2 {
            font-weight: 600;
            font-size: 4rem;
        }

        p {
            font-family: 'Roboto', sans-serif;
            font-weight: normal;
            font-size: 1.6rem;
        }
    }


    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        height: 12rem;
        align-items: center;
        justify-content: end;
        margin: 4.4rem 0 6.2rem 2rem;
        padding: 3.6rem 2rem 2.2rem 0;

        > img {
            height: 14.9rem;
            width: 19.1rem;
            position: absolute;
            left: -3rem;
            bottom: 0;
        }
        > div {
            width: 21.6rem;
            h2 {
                font-weight: 600;
                font-size: 1.8rem;
            }

            p {
                font-family: 'Roboto', sans-serif;
                font-weight: normal;
                font-size: 1.2rem;
            }
        }
    }
`;
