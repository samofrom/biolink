import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

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

export const StyledCreator = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreatorAvatarWrapper = styled.div`
  width: 175px;
  height: 175px;

  border-radius: 50%;

  border: 0 solid transparent;
  background: linear-gradient(0.351turn, #ff5858 23.71%, #c058ff 78.8%);
  background-size: 165%;

  margin-bottom: 16px;

  &:hover {
    border: 4px solid transparent;
    animation: ${bgAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  }

  overflow: hidden;
  transition: border-width 0.1s ease;
`;

export const CreatorAvatar = styled(Image)`
  width: 100%;
  height: auto;
`;

export const CreatorName = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 17px;

  display: flex;
  align-items: center;
  gap: 4px;

  margin-bottom: 12px;
`;

export const CreatorVerify = styled.div`
  width: 16px;
  height: 16px;
`;
