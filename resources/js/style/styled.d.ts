import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      baseWhite: string,
      fontColor: string;
      titleColor: string;
      pageBackground: string;
      button: {
        success: string,
      }
    };
    media: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
      extraExtraLarge: string;
    }
  }
}
