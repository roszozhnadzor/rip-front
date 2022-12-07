import styled from "styled-components";
import { GiCupcake } from "@react-icons/all-files/gi/GiCupcake";

export const RegistrationContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 600px;
    height: 600px;
    padding: 40px;

    span {
        font-size: 130px;
    }
`;

export const CheckboxesContainerStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin: 16px 0;
`;

export const GiCupcakeStyled = styled(GiCupcake)``;
