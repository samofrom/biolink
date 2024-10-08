import React, { FC, useEffect, useRef, useState } from 'react';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import {
  BackSide,
  Container,
  EmbedTheme1,
  EmbedTheme2,
  FrontSide,
  Img,
  Soc1,
  Soc2,
} from './Rotation.styles';

import { Transition } from 'react-transition-group';

type RotationProps = {
  frontSideSocial: StaticImport;
  frontSide: StaticImport;
  frontSideEmbed: StaticImport;
  backSideSocial: StaticImport;
  backSide: StaticImport;
  backSideEmbed: StaticImport;
} & Partial<{
  reflected: boolean;
}>;

const Rotation: FC<RotationProps> = ({
  frontSideSocial,
  frontSide,
  frontSideEmbed,
  backSideSocial,
  backSide,
  backSideEmbed,
  reflected = false,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [rotation, setRotation] = useState<number>(0);
  const [isFrontSide, setIsFrontSide] = useState<boolean>(true);

  const nodeRef = useRef(null);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const angle = (scrollY / (maxScroll / 16)) * 180;

      if (angle <= 180) {
        setRotation(angle);
      }

      setIsVisible(scrollY < 400);

      setIsFrontSide((scrollY / (maxScroll / 16)) * 180 <= 90);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const transitionStyles = {
    entering: { opacity: 0, transform: 'scale(1.15)' },
    entered: { opacity: 1, transform: 'scale(1)' },
    exiting: { opacity: 1, transform: 'scale(1)' },
    exited: { opacity: 0, transform: 'scale(1.15)' },
    unmounted: { opacity: 0 },
  };

  return (
    <Transition nodeRef={nodeRef} in={isVisible} timeout={0} appear>
      {(state) => (
        <Container
          ref={nodeRef}
          $reflected={reflected}
          style={transitionStyles[state]}
        >
          <FrontSide $rotation={rotation} $reflected={reflected}>
            <Soc1
              src={frontSideSocial}
              alt={'Social'}
              $isFrontSide={isFrontSide}
              $reflected={reflected}
              priority
            />
            <Img src={frontSide} alt={'Theme 1'} priority />
            <EmbedTheme1
              src={frontSideEmbed}
              alt="Theme 2"
              $isFrontSide={isFrontSide}
              $reflected={reflected}
              priority
            />
          </FrontSide>
          <BackSide $rotation={rotation} $reflected={reflected}>
            <Soc2
              src={backSideSocial}
              alt={'Social'}
              $isFrontSide={isFrontSide}
              $reflected={reflected}
              priority
            />
            <Img src={backSide} alt={'Theme 2'} priority />
            <EmbedTheme2
              src={backSideEmbed}
              alt="Theme 2"
              $isFrontSide={isFrontSide}
              $reflected={reflected}
              priority
            />
          </BackSide>
        </Container>
      )}
    </Transition>
  );
};

export default Rotation;
