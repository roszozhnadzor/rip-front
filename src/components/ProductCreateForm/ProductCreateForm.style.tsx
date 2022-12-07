import { COLORS } from "constants/colors";
import styled from "styled-components";

export const FormContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    min-width: 330px;
    height: fit-content;
    background: transparent;

    span {
        width: 100%;
        color: ${COLORS.TextGrey};
        font-weight: 400;
        height: fit-content;
        margin-top: 12px;
        margin-bottom: 2px;
        margin-left: 10px;
    }

    button {
        margin-top: 20px;
    }
`;

export const TitleStyled = styled.div`
    font-size: 18px;
    font-weight: 400;
`;
