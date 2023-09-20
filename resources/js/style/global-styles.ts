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
    background-color: ${({ theme }) => theme.color.pageBackground};
    transition: .3s;
  }

  #root {
    min-height: 100vh;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`

export default GlobalStyle
