import { COLORS } from "constants/colors";
import styled from "styled-components";

export const CheckboxCustomStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${COLORS.TextColor2};

    & > label {
        cursor: pointer;

        &:hover {
            color: ${COLORS.TextColor};
        }
    }
`;

export const CheckBoxStyled = styled.input`
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid ${COLORS.BorderColor};
    cursor: pointer;
    transition: all 0.2s;
    margin: 0;

    & + span {
        position: absolute;
        top: 2px;
        left: 0px;
        font-size: 0px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.2s;
        color: white !important;
    }

    &:checked {
        background: ${COLORS.BorderColor};

        & + span {
            font-size: 16px;
            transform: translate(6%, 0%);
            opacity: 1;
        }
    }
`;

export const LabelStyled = styled.label`
    position: relative;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
`;
