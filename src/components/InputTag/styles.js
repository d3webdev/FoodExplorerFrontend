import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: auto;
    border-radius: 0.8rem;
    padding: 0.8rem 1.2rem;

    ${({ theme, $isNew }) =>
        $isNew === true
            ? `
            input {
                color: ${theme.COLORS.LIGHT_500};
                width: 10rem;
            }
            
            background-color: transparent;
            border: 2px dashed ${theme.COLORS.LIGHT_500};
            
            `
            : `
            input {
                color: ${theme.COLORS.LIGHT_100};   
            }
            background: ${theme.COLORS.LIGHT_600};
            `};

    input {
        background: transparent;
        border: none;
        margin-top: 0.1rem;
        ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
        height: 100%;
        outline: none;
        width: 10rem;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    button {
        background: transparent;
        margin-top: 0.2rem;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        cursor: pointer;
    }
`;
