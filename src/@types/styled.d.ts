import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      light: string;
      backgroundColor: string;
      textColor: string;
      white: string;
    };
  }
}
