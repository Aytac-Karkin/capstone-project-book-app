import { createGlobalStyle } from "styled-components";
import { EB_Garamond } from "next/font/google";
import { Inter } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";

const garamond = EB_Garamond({ subsets: ["latin"], weight: "500" });
const inter = Inter({ subsets: ["latin"], weight: "400" });
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: "400" });

export default createGlobalStyle`

:root {
--color-dark-yellow: rgb(237,174,73);
--color-light-yellow: rgb(255,236,204);
--color-green: rgb(0,132,114);
--serif-font-bold: ${garamond.style.fontFamily};
--sans-serif-font: ${plexSans.style.fontFamily};
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  

  body {
    margin: 0;
    font-family: var(--sans-serif-font), sans-serif;
    background-color: var(--color-dark-yellow);
  }

  h1,h2{
    font-family: var(--serif-font-bold), serif;

  }
`;
