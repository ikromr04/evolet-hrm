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
    font-family: Inter, sans-serif;
    color: ${({ theme }) => theme.color.fontColor};
    background-color: ${({ theme }) => theme.color.pageBackground};
  }

  #root {
    min-height: 100vh;
  }

  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`

export default GlobalStyle
