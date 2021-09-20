import { createGlobalStyle } from "styled-components/macro";
import fonts from "./fonts";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${variables}

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--grey);
        color: var(--white);
        font-family: var(--font);
        font-size: var(--fz-md);
    }
`;

export default GlobalStyle;
