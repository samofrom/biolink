import { css } from 'styled-components';

export const lightTheme = {
  colors: {
    primary: '#000000',
    secondary: '#4B5563',

    accentWhite: '#FFFFFF',
    accentBlack: '#000000',

    blue: '#0095f6',

    bgWhite: '#FFFFFF',
    bgBlack: '#000000',
    bgGrey: '#121215',
    bgMud: '#f5f5f5',

    placeholder: '#6e6d7a',

    buttonContainedHover: '#1f2937',
    buttonTextHover: '#4b5563',
  },

  typography: {
    h1: css`
      font-size: 64px;
      font-weight: 600;
      line-height: 80px;
    `,
    h2: css`
      font-size: 28px;
      font-weight: 600;
      line-height: 42px;
    `,
    body: css`
      font-size: 18px;
      font-weight: 400;
      line-height: 27px;
    `,
    bodyS: css`
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    `,
    bodySBold: css`
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
    `,
    button: css`
      font-size: 16px;
      font-weight: 600;
      line-height: 28px;
    `,
  },

  stroke: {
    dark: '1px solid #2f2e31',
  },

  effects: {
    shadow:
      '0 2px 5px rgba(0, 0, 0, .05), 0 8px 40px rgba(0, 0, 0, .04), 0 0 2px rgba(0, 0, 0, .15);',
  },
} as const;

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,

    accentWhite: '#000000',
    accentBlack: '#FFFFFF',

    buttonContainedHover: '#D1D5DB',
    buttonTextHover: '#4b5563',
  },
} as const;

export type CustomTheme = typeof lightTheme | typeof darkTheme;
