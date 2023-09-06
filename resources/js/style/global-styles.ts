import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: inherit;
  }

  img {
    max-width: 100%;
  }

  body {
    margin: 0;
  }

  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`

export default GlobalStyle
