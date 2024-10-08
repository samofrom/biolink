import React, { FC } from 'react';
import { StyledLayout } from './Layout.styles';
import { useTheme } from '../../hooks/useTheme';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isDarkTheme, isMudBackground } = useTheme();

  return (
    <StyledLayout $isDark={isDarkTheme} $isMud={isMudBackground}>
      {children}
    </StyledLayout>
  );
};

export default Layout;
