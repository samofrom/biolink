import React, { FC } from 'react';
import { FeaturesGrid, SectionHeader, StyledFeatures } from './Features.styles';
import Typography from '../../ui/Typography/Typography';
import Feature from '../../components/Feature/Feature';

import Themes from '../../../public/assets/images/themes.png';
import EmbedApps from '../../../public/assets/images/embed-apps.png';
import Stats from '../../../public/assets/images/stats.png';
import Image from 'next/image';
import Slider from '../../components/Slider/Slider';

type FeaturesProps = {};

const Features: FC<FeaturesProps> = () => {
  return (
    <StyledFeatures>
      <SectionHeader>
        <Typography variant={'h1'} centerAlign>
          Unmatchable features. <span>Free, forever.</span>
        </Typography>
      </SectionHeader>
      <FeaturesGrid>
        <Feature
          content={<Image src={Themes} alt={'Themes'} />}
          label={'Pick a theme or\ndesign your own'}
        />

        <Feature
          content={<Image src={EmbedApps} alt={'Embed Apps'} />}
          label={'Embed your favorite apps\nand content'}
        />

        <Feature
          content={<Image src={Stats} alt={'Stats'} />}
          label={'Keep track of everything,\nonly for your eyes'}
        />

        <Feature
          content={<Slider />}
          label={'Everything you need for a\ncomplete site'}
        />
      </FeaturesGrid>
    </StyledFeatures>
  );
};

export default Features;
