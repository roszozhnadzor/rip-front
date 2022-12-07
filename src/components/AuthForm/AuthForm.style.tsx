import { COLORS } from "constants/colors";
import styled from "styled-components";
import { GiCupcake } from "@react-icons/all-files/gi/GiCupcake";

export const AuthContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 600px;
    height: 500px;
    padding: 40px;
    background: transparent;

    span {
        font-size: 130px;
    }
`;

export const GiCupcakeStyled = styled(GiCupcake)``;
