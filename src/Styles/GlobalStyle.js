import { createGlobalStyle } from "styled-components/macro";
import fonts from "./fonts";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${variables}

    html {
        font-family: var(--font);
    }
    
    *, *:before, *:after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background: var(--grey);
    }
`;

export default GlobalStyle;
