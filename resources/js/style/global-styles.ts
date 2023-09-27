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
    background-color: #f1f5f8;
    transition: .3s;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: white;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #6c86ab;
      border-radius: 2px;
    }
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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
