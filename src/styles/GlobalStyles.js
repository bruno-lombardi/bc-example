import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --green: rgb(47, 254, 95);
    --light-green: rgb(44, 254, 136);
    --lighter-green: rgb(44, 254, 137);
    --green-gradient: linear-gradient(rgb(47, 254, 95) 0%, rgb(44, 254, 136) 26%, rgb(44, 254, 137) 100%) 0% 0% no-repeat padding-box padding-box transparent;
    --light: #f8f9fa;
    --dark: #343a40;
    --black: #212529;
    --gray: rgb(232, 232, 232);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--light);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Noto Sans JP', apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
    color: var(--black);
  }

  button, input {
    font-family: 'Noto Sans JP', apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  }
`;

export default GlobalStyles;
