import styled, { css } from 'styled-components';

export type BaseButton = {
  children: string;
  onClick?: () => void;
};

const BaseButton = styled.button<BaseButton>`
  ${({ theme }) => theme.typography['button']}

  font-family: inherit;
  background: transparent;
  border: none;
  cursor: pointer;

  ${({ theme }) => theme.colors['secondary']}
`;

export const ContainedButton = styled(BaseButton)`
  color: ${({ theme }) => theme.colors['accentWhite']};
  background-color: ${({ theme }) => theme.colors['accentBlack']};

  padding: 8px 24px;
  border-radius: 100px;

  &:hover {
    background-color: ${({ theme }) => theme.colors['buttonContainedHover']};
  }
`;

export const TextButton = styled(BaseButton)`
  color: ${({ theme }) => theme.colors['accentBlack']};
`;
