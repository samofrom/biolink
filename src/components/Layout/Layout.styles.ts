import styled from 'styled-components';

export const StyledLayout = styled.div<{ $isMud: boolean; $isDark: boolean }>`
  background-color: ${({ theme, $isMud, $isDark }) =>
    $isDark
      ? theme.colors['bgBlack']
      : $isMud
        ? theme.colors['bgMud']
        : theme.colors['bgWhite']};
  transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;
