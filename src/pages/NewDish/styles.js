import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
    align-items: center;
    padding-top: 1.6rem;
    margin: 1.6rem 1.6rem 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > button {
        align-self: flex-start;
        border: none;
        background: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        cursor: pointer;

        > p {
            ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
            font-size: 2rem;
            display: flex;
            align-items: center;
        }
    }

    > h1 {
        align-self: flex-start;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
    }
`;

export const Form = styled.form`
    width: 100%;
    display: grid;
    gap: 1.6rem;
    grid-template-columns: 1fr 2fr 1fr;
    row-gap: 3.2rem;
    grid-template-areas:
        'dishimage name category'
        'ingredientsPrice ingredientsPrice ingredientsPrice'
        'description description description'
        'button button button';
    margin-bottom: 5.2rem;

    label {
        margin-bottom: 1.6rem;
    }

    > button {
        grid-area: button;
        justify-self: end;
        width: 17.2rem;
        background: ${({ theme }) => theme.COLORS.TOMATO_400};
        &:hover {
            background: ${({ theme }) => theme.COLORS.TOMATO_200};
        }
    }

    select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 100%;
        padding: 0 1.6rem;
        background: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
        border: 1px solid ${({ theme }) => theme.COLORS.TOMATO_400};

        &:focus {
            padding: 0 1.6rem;
        }

        option {
            background: ${({ theme }) => theme.COLORS.DARK_900};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            padding: 0 1.6rem;
            border-radius: 0.8rem;
        }
    }

    .dish-name {
        grid-area: name;
    }

    .dish-category {
        grid-area: category;
    }

    .dish-discount {
        grid-area: discount;
    }

    .dish-price {
        grid-area: price;
    }

    .dish-description {
        grid-area: description;
        width: 100%;
    }

    .dish-ingredients-price {
        display: grid;
        grid-area: ingredientsPrice;
        grid-template-columns: 5fr 1fr 1fr;
        grid-template-areas: 'ingredients discount price';
        gap: 1.6rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        .dish-ingredients-price {
            display: flex;
            flex-direction: column;
            gap: 1.6rem;
        }

        > button {
            grid-area: button;
            width: 100%;
            background: ${({ theme }) => theme.COLORS.TOMATO_400};
            &:hover {
                background: ${({ theme }) => theme.COLORS.TOMATO_200};
            }
        }
    }
`;

export const DishImage = styled.div`
    grid-area: dishimage;
    > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
        margin-bottom: 1.6rem;
    }

    input {
        display: none;
    }

    label {
        background: ${({ theme }) => theme.COLORS.DARK_800};
        border-radius: 0.8rem;
        height: 4.8rem;
        padding: 1.2rem 3.2rem;

        display: flex;
        gap: 1.6rem;
        align-items: center;
        cursor: pointer;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
    }
`;

export const Tags = styled.div`
    grid-area: ingredients;
    > p {
        display: block;
        ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
        margin-bottom: 1.6rem;
    }
    > div {
        display: flex;
        flex-wrap: wrap;
        background: ${({ theme }) => theme.COLORS.DARK_900};
        padding: 0.8rem;
        border-radius: 0.8rem;
        gap: 0.8rem;
    }
`;
