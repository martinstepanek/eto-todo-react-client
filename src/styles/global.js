import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap');

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background-color: ${colors.background};
    color: ${colors.text};
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }
`;

export default GlobalStyle;
