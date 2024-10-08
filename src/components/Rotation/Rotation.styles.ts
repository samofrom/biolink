import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div<{ $reflected: boolean }>`
  position: fixed;
  top: 50%;
  ${(props) => (props.$reflected ? 'right' : 'left')}: 15%;

  perspective: 1000px;

  transition: all 0.3s ease;
`;

export const Img = styled(Image)`
  width: 190px;
  height: auto;
`;

const Card = styled.div.attrs<{ $rotation: number; $reflected: boolean }>(
  ({ $rotation, $reflected }) => ({
    style: {
      transform: `translate(-50%, -50%) rotate(${$reflected ? '-12' : '12'}deg) rotateY(${$reflected ? -$rotation : $rotation}deg) ${$rotation >= 90 ? 'scaleX(-1)' : ''}`,
    },
  })
)`
  position: fixed;
  transform-style: preserve-3d;
`;

export const FrontSide = styled(Card)`
  opacity: ${(props) => (props.$rotation <= 90 ? 1 : 0)};
`;

export const BackSide = styled(Card)`
  opacity: ${(props) => (props.$rotation >= 90 ? 1 : 0)};
`;

const Socials = styled(Image)<{ $isFrontSide: boolean; $reflected: boolean }>`
  width: 110px;
  height: auto;
  position: absolute;
  top: 50px;
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Soc1 = styled(Socials)`
  ${(props) => (props.$reflected ? 'right' : 'left')}: ${(props) =>
    props.$isFrontSide ? '-25%' : 0};
  transform: translateZ(20px);
`;

export const Soc2 = styled(Socials)`
  ${(props) => (props.$reflected ? 'right' : 'left')}: ${(props) =>
    props.$isFrontSide ? 0 : '-25%'};
  transform: translateZ(-20px);
`;

const Embed = styled(Image)<{ $isFrontSide: boolean; $reflected: boolean }>`
  width: 180px;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: scale(0.9);
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const EmbedTheme1 = styled(Embed)`
  width: 280px;
  ${(props) => (props.$reflected ? 'left' : 'right')}: ${(props) =>
    props.$isFrontSide ? '-100%' : '-50%'};
  transform: translateZ(20px);
`;

export const EmbedTheme2 = styled(Embed)`
  width: 180px;
  ${(props) => (props.$reflected ? 'left' : 'right')}: ${(props) =>
    !props.$isFrontSide ? '-50%' : '0'};
  transform: translateZ(-20px);
`;
