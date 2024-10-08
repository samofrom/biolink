import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

export const StyledHero = styled.div`
  width: 720px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  margin-bottom: 8px;
`;

export const Stars = styled.div`
  width: 142px;
  height: auto;
`;

export const Creators = styled.span`
  ${({ theme }) => theme.typography['bodyS']};
  line-height: 27px;
  text-size-adjust: 100%;
`;

const bgCircle = keyframes`
  0% {
    background-size: 350%;
    background-position: left 100% bottom 0;
  }

  50% {
    background-size: 350%;
    background-position: left -10% bottom 0;
  }
  100% {
    background-size: 350%;
    background-position: left 100% bottom 0;
  }
`;

export const Heading = styled.h1`
  font-family: inherit;
  font-size: 96px;
  line-height: 100px;
  letter-spacing: -2.4px;

  background-size: 150%;
  text-align: center;
  font-weight: 600;

  background: #000 radial-gradient(circle, #c058ff 0, #ff5858 26%, #000 27%)
    no-repeat 100% 100%;

  animation-name: ${bgCircle};
  animation-duration: 10s;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-bottom: 24px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
