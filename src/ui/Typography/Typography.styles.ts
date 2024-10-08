import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export type BaseTypography = {
  children: React.ReactNode;
  $centerAlign?: boolean;
  $animate?: boolean;
};

const bgAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0 0;
  }
`;

const BaseTypography = styled.span<BaseTypography>`
  text-align: ${(props) => (props.$centerAlign ? 'center' : 'unset')};
  white-space: pre-wrap;
  span {
    background-size: 100%;
    background: #000 linear-gradient(0.351turn, #ff5858 23.71%, #c058ff 78.8%)
      no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.75s ease;

    ${(props) =>
      props.$animate &&
      css`
        background: linear-gradient(0.351turn, #ff5858 23.71%, #c058ff 78.8%);
        background-size: 165%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation-name: ${bgAnimation};
        animation-duration: 2s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
      `};
  }
`;

export const H1 = styled(BaseTypography).attrs({ as: 'h1' })`
  ${({ theme }) => theme.typography['h1']};
  letter-spacing: -1.6px;
`;

export const H2 = styled(BaseTypography).attrs({ as: 'h2' })`
  ${({ theme }) => theme.typography['h2']};
`;

export const H3 = styled(BaseTypography).attrs({ as: 'h3' })`
  ${({ theme }) => theme.typography['h3']};
`;

export const Body = styled(BaseTypography).attrs({ as: 'span' })`
  ${({ theme }) => theme.typography['body']};
`;

export const BodyS = styled(BaseTypography).attrs({ as: 'span' })`
  ${({ theme }) => theme.typography['bodyS']};
`;
