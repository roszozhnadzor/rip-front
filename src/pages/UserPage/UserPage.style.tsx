import { COLORS } from "constants/colors";
import styled from "styled-components";

export const UserPageStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    gap: 20px;

    hr {
        width: 100%;
        border-color: red;
        border: none;
        border-bottom: 1px solid ${COLORS.BorderColor};
    }
`;
