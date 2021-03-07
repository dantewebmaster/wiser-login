import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  html, body {
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font: 400 1.4rem "Montserrat", sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  h1 {
    color: #333;
  }

  a {
    color: inherit;
  }
`;

const GlobalStyles = ({ children }: { children: any }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default GlobalStyles;
