import { createGlobalStyle, css } from "styled-components";
import { fonts } from "./fonts";

const globalStyle = css`
  ${fonts}

  body {
    font-family: "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;
