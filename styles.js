import { createGlobalStyle } from "styled-components";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ subsets: ["latin"], weight: "500" });

export default createGlobalStyle`
:root {
--color-background: rgb(237,174,73);
--color-cards: rgb(250,240,202);
// --color-text: rgb(13,59,102);
--color-text: rgb(0,157,136);
--serif-font-bold: ${garamond.style.fontFamily};
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--color-background);
  }

  h1,h2,h3,h4{
    //color: var(--color-text);
    font-family: var(--serif-font-bold);

  }
`;
