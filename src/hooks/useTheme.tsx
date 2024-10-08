import React from 'react';

export type ThemeContextProps = {
  isDarkTheme: boolean;
  setDarkTheme: (isDarkTheme: boolean) => void;
  toggleDarkTheme: () => void;
  isMudBackground: boolean;
  setMudBackground: (isMudBg: boolean) => void;
  toggleMudBackground: () => void;
};

export const ThemeContext = React.createContext<ThemeContextProps | null>(null);

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (!context)
    throw new Error('useThemeContext must be used within ThemeContext');

  return context;
};
