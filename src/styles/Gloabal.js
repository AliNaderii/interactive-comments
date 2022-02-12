import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    background-color: hsl(228, 33%, 97%);
    line-height: 1.7;
  }

  button {
    border: none;
    background-color: unset;
  }
`;

export default GlobalStyle;