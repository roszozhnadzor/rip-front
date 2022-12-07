import { ButtonProps } from "components/Button/Button.types";
import styled, { css } from "styled-components";
import { COLORS } from "../../constants/colors";

export const ButtonStyled = styled.button<ButtonProps>`
    width: ${({ filled: fill }) => (fill ? "100%" : "fit-content")};
    min-width: 100px;
    height: 40px;
    border: ${({ styleType }) => (styleType === "outlined" ? `1px solid ${COLORS.BorderColor}` : "none")};
    border-radius: ${({ rounded }) => (rounded ? "100px" : "6px")};
    background-color: ${({ styleType }) => (styleType === "primary" ? COLORS.BackgroundMainPale : "transparent")};
    transition: 0.1s linear;
    padding: 0 10px;
    cursor: pointer;

    color: ${COLORS.TextColor};
    font-weight: 400;
    font-size: 16px;

    &:hover {
        color: ${COLORS.BackgroundMain};
        background: ${COLORS.BorderColor};
    }

    ${({ styleType }) =>
        styleType === "link" &&
        css`
            width: fit-content;
            height: fit-content;
            background: none;
            border: none;
        `}

    ${({ styleType }) =>
        styleType === "danger" &&
        css`
            border-color: ${COLORS.ErrorRed};
            color: ${COLORS.ErrorRed};

            &:hover {
                background: ${COLORS.ErrorRed};
                color: white;
            }
        `}
`;
