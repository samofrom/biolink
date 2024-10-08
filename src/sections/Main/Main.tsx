import React from 'react';

import Rotation from '../../components/Rotation/Rotation';

import FrontSideLeft from '../../../public/assets/images/theme-1.png';
import BackSideLeft from '../../../public/assets/images/theme-3.png';
import FrontSideSocialLeft from '../../../public/assets/images/theme-1-socials.png';
import BackSideSocialLeft from '../../../public/assets/images/theme-3-socials.png';
import FrontSideEmbedLeft from '../../../public/assets/images/theme-1-embed.png';
import BackSideEmbedLeft from '../../../public/assets/images/theme-3-embed.png';

import FrontSideRight from '../../../public/assets/images/theme-2.png';
import BackSideRight from '../../../public/assets/images/theme-4.png';
import FrontSideSocialRight from '../../../public/assets/images/theme-2-socials.png';
import BackSideSocialRight from '../../../public/assets/images/theme-4-socials.png';
import FrontSideEmbedRight from '../../../public/assets/images/theme-2-embed.png';
import BackSideEmbedRight from '../../../public/assets/images/theme-4-embed.png';

import Hero from '../../components/Hero/Hero';
import { StyledMain } from './Main.styles';

const Main = () => {
  return (
    <StyledMain>
      <Rotation
        frontSideSocial={FrontSideSocialLeft}
        frontSide={FrontSideLeft}
        frontSideEmbed={FrontSideEmbedLeft}
        backSideSocial={BackSideSocialLeft}
        backSide={BackSideLeft}
        backSideEmbed={BackSideEmbedLeft}
      />
      <Hero label={'Launch your site in seconds'} />
      <Rotation
        frontSideSocial={FrontSideSocialRight}
        frontSide={FrontSideRight}
        frontSideEmbed={FrontSideEmbedRight}
        backSideSocial={BackSideSocialRight}
        backSide={BackSideRight}
        backSideEmbed={BackSideEmbedRight}
        reflected
      />
    </StyledMain>
  );
};

export default Main;
