import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      basePrimary: string;
      primaryLight: string;
      baseSecondary: string;
      baseDark: string;
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
