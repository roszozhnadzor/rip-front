import { COLORS } from "constants/colors";
import { MAX_WIDTH } from "constants/common";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";
import { GiCakeSlice } from "@react-icons/all-files/gi/GiCakeSlice";

export const HeaderStyled = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 68px;
    background-color: ${COLORS.BackgroundMain};
    border-bottom: 1px solid ${COLORS.BorderColor};
    z-index: 1000;

    span {
        font-size: 34px;
        cursor: pointer;
    }
`;

export const ContainerStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${MAX_WIDTH}px;
    height: 100%;
    padding: 0 20px;

    & > a {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    h3 {
        font-size: 34px;

        color: ${COLORS.TextColor2};
    }

    h2 {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-weight: 100;
    }

    & > div {
        display: flex;
        align-items: center;
        gap: 32px;
    }

    span {
        font-size: 40px;
    }
`;

export const BsCartStyled = styled(BsCart)`
    cursor: pointer;
`;

export const CartStyled = styled.div`
    position: relative;
    cursor: pointer;
`;

export const LengthStyled = styled.div`
    position: absolute;
    top: -10px;
    left: calc(100% - 10px);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: fit-content;
    padding: 4px;
    background: ${COLORS.Pink};
    color: ${COLORS.BackgroundMain};
    opacity: 1;
    border-radius: 10px;
`;

export const CartIconStyled = styled.span`
    font-size: 30px !important;
`;

export const GiCakeSliceStyled = styled(GiCakeSlice)``;
