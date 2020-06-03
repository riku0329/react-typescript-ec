import 'styled-components';

export const theme = {
  primaryColor: '#178B8D',
  subColor: '#729994',
  secondaryColor: '#FBAA0B',
  baseText: '#333',
  secondText: '#aaa',
  baseColor1: '#fff',
  baseColor2: '#efefef',
  baseColor3: '#091622',
  layout: {
    width: 960,
  },
} as const;

type AppTheme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}
