import { css } from "styled-components/macro";

const fonts = css`
  @font-face {
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 300;
    src: local(""),
      url("../fonts/fira-code-v12-latin-300.woff2") format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url("../fonts/fira-code-v12-latin-300.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* fira-code-regular - latin */
  @font-face {
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 400;
    src: local(""),
      url("../fonts/fira-code-v12-latin-regular.woff2") format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url("../fonts/fira-code-v12-latin-regular.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* fira-code-500 - latin */
  @font-face {
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 500;
    src: local(""),
      url("../fonts/fira-code-v12-latin-500.woff2") format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url("../fonts/fira-code-v12-latin-500.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* fira-code-700 - latin */
  @font-face {
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 700;
    src: local(""),
      url("../fonts/fira-code-v12-latin-700.woff2") format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url("../fonts/fira-code-v12-latin-700.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`;

export default fonts;
