import React, { FC, useState } from 'react';

import { ThemeProvider as Provider } from 'styled-components';
import { darkTheme, lightTheme } from '../../styles/theme';
import { ThemeContext } from '../../hooks/useTheme';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [isMudBackground, setIsMudBackground] = useState<boolean>(false);

  const toggleDarkTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const toggleMudBackground = () => {
    setIsMudBackground((prev) => !prev);
  };

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        setDarkTheme: setIsDarkTheme,
        toggleDarkTheme,
        isMudBackground,
        toggleMudBackground,
        setMudBackground: setIsMudBackground,
      }}
    >
      <Provider theme={currentTheme}>{children}</Provider>
    </ThemeContext.Provider>
  );
};
