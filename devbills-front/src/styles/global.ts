import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.black};    
  }

  body, input, button, select {
    font: 1rem 'Lexand', sans-serif; // 1rem = 16px   (12px/16 = 0.75rem)
  }

  h1, h2, p, span, strong, button, label, input {
    line-height: 100%;
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
  } 

  button {
    cursor: pointer;
  }
`;
