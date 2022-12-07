import { COLORS } from "constants/colors";
import styled from "styled-components";

export const ProductCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    border: 1px solid ${COLORS.BorderColor};
    cursor: pointer;
    width: 100%;
    height: fit-content;
    color: ${COLORS.TextGrey};
    padding: 16px;
    transition: all 0.2s;

    h2 {
        font-family: "Lobster" !important;
        padding: 0;
        font-size: 30px !important;
    }

    p {
        font-size: 30px;
        margin-left: auto;
    }

    &:hover {
        border: 1px solid ${COLORS.TextColor2};
        transform: scale(1.01, 1.01);
    }

    button {
        margin: 8px 0;
    }
`;

export const MainInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    text-align: center;

    span {
        font-weight: 400;
        color: ${COLORS.TextGrey};
    }

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const TextStyled = styled.div`
    white-space: nowrap;
    color: ${COLORS.TextGrey};
    font-weight: 400;
`;

export const DeleteIconStyled = styled.span`
    color: ${COLORS.TextGrey};
    transition: all 200ms;
    margin-left: auto;
    margin-top: 16px;

    &:hover {
        color: ${COLORS.ErrorRed};
    }
`;
