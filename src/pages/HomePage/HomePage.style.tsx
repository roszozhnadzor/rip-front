import { COLORS } from "constants/colors";
import styled from "styled-components";

export const MainPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding-bottom: 100px;
    overflow: visible;
`;

export const ContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1340px;
    padding: 20px 0;

    h1 {
        font-family: "Dancing Script", cursive;
        font-size: 100px;
        font-weight: 700;
    }

    h2 {
        font-family: "Dancing Script", cursive;
        color: #525252;
    }
`;

export const ProductsStyled = styled.div`
    margin-top: 26px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;

    & > * {
        width: calc(100% / 2 - 6px);
    }
`;

export const TableStyled = styled.div`
    display: flex;
    gap: 40px;
    width: 100%;
    margin-top: 60px;
    overflow: visible;
`;

export const NothingStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.TextGrey};
    font-size: 20px;
    font-weight: 400;
`;

export const RightContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* min-width: 300px; */

    button {
        margin-bottom: 20px;
    }
`;
