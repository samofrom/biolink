import React, { FC } from 'react';
import {
  Creators,
  Footer,
  Header,
  Heading,
  Stars,
  StyledHero,
} from './Hero.styles';

import StarsSVG from '../../../public/assets/svg/stars.svg';
import Typography from '../../ui/Typography/Typography';
import Input from '../../ui/Input/Input';
import { useIntersection } from '../../hooks/useIntersection';
import { useTheme } from '../../hooks/useTheme';

type HeroProps = {
  label: string;
};

const Hero: FC<HeroProps> = ({ label }) => {
  const { setMudBackground } = useTheme();
  const { ref, isIntersecting } = useIntersection({
    threshold: [0.75],
    onIntersection: () => setMudBackground(!isIntersecting),
  });
  return (
    <StyledHero ref={ref}>
      <Header>
        <Stars>
          <StarsSVG />
        </Stars>
        <Creators>Loved by 500,000+ creators</Creators>
      </Header>
      <Heading>{label}</Heading>
      <Footer>
        <Input />
        <Typography variant={'bodyS'}>
          It’s free, and takes less than a minute
        </Typography>
      </Footer>
    </StyledHero>
  );
};

export default Hero;
