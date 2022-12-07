import styled, { css } from "styled-components";
import { COLORS } from "../../constants/colors";
import { InputProps } from "./Input.types";

export const InputWrapperStyled = styled.div`
    position: relative;
    width: 100%;

    span {
        position: absolute;
        right: 0;
        transform: translateY(20%) translateX(-20%);
    }
`;

export const InputStyled = styled.input<InputProps>`
    width: 100%;
    height: ${({ isSearch }) => (isSearch ? "40px" : "56px")};
    padding: ${({ isSearch }) => (isSearch ? "0px 32px 0 8px" : "20px")};
    background: transparent;
    border: 1px solid ${COLORS.BorderColor};
    border-radius: 12px;

    &:focus {
        border-color: ${COLORS.TextColor};
    }
    &:active {
        border-color: ${COLORS.TextColor};
    }

    font-size: 18px;
    font-weight: 200;
    color: ${COLORS.TextColor};

    transition: all 0.2s ease;

    ${({ withError }) =>
        withError &&
        css`
            border-width: 2px;
            border-color: ${COLORS.ErrorRed};
        `}

    &::placeholder {
        color: #800a4b6b;
    }
`;
