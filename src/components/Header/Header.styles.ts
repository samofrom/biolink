import styled from 'styled-components';

export const StyledHeader = styled.div<{
  $isSticky: boolean;
  $isDark: boolean;
}>`
  width: 100%;
  max-width: 1300px;
  height: 76px;

  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  display: flex;

  padding: 16px 24px;

  margin: ${(props) => (props.$isSticky ? '0' : '10px')} 8px 0;

  border-radius: ${(props) => (props.$isDark ? '0' : '100')}px;
  box-shadow: ${({ theme }) => theme.effects.shadow};
  background-color: ${({ theme }) => theme.colors['accentWhite']};

  transition:
    margin-top 0.75s ease,
    border-radius 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  z-index: 1000;
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.colors['accentBlack']};
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  margin: 0 32px 0 8px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 24px;
`;

export const NavLink = styled.a`
  ${({ theme }) => theme.typography['bodySBold']};

  color: ${({ theme }) => theme.colors['accentBlack']};

  &:hover {
    color: ${({ theme }) => theme.colors['buttonTextHover']};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
`;
