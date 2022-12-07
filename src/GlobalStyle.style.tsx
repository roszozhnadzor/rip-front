import { COLORS } from "constants/colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: "Dancing Script", 'Lobster', 'Philosopher', cursive, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        color: #ce98b6;
    }

    code {
        font-family: "Dancing Script", 'Russo One', monospace, sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    span,
    a,
    p {
        margin: 0;
        padding: 0;
        color: ${COLORS.TextColor2};
        text-decoration: none

    }

    * {
        box-sizing: border-box;
        font-family: 'Philosopher', sans-serif;
        color: ${COLORS.TextColor2};
    }

    input,
    textarea,
    select {
        -webkit-appearance: none;
        outline:none;
    }

`;
