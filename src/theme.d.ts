import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      background: string;
      background_secondary: string;
      accent: string;
      textPrimary: string;
      textSecondary: string;
      textBody: string;
      translucent_accent: string;
      shadow_bg: string;
    }
  }
}