import React, { FC } from 'react';
import { CreatorsFeed, StyledCreators } from './Creators.styles';
import Typography from '../../ui/Typography/Typography';
import Creator from '../../components/Creator/Creator';

import User1 from '../../../public/assets/images/user_1.webp';
import User2 from '../../../public/assets/images/user_2.jpg';
import User3 from '../../../public/assets/images/user-3_1.jpeg';
import User4 from '../../../public/assets/images/user-4.png';
import User5 from '../../../public/assets/images/user_5_new.png';
import { useTheme } from '../../hooks/useTheme';
import { useIntersection } from '../../hooks/useIntersection';

type CreatorsProps = {};

const Creators: FC<CreatorsProps> = () => {
  const { isDarkTheme, setDarkTheme } = useTheme();
  const { ref, isIntersecting } = useIntersection({});

  return (
    <StyledCreators $isDark={isDarkTheme}>
      <Typography variant={'h1'} centerAlign>
        Loved by <span>500,000+</span>
        {'\n'}creators
      </Typography>
      <CreatorsFeed ref={ref}>
        <Creator
          avatar={User1}
          name={'Austin Archer'}
          link={'bio.link/austinarcher'}
        />
        <Creator avatar={User2} name={'AC Milan'} link={'bio.link/acmilan'} />
        <Creator
          avatar={User3}
          name={'Jo Franco'}
          link={'bio.link/jo_franco'}
        />
        <Creator
          avatar={User4}
          name={'Padre Paulo'}
          link={'bio.link/padrepaulorica...'}
        />
        <Creator
          avatar={User5}
          name={'The Bachelorette'}
          link={'bio.link/bachelorett...'}
        />
      </CreatorsFeed>
    </StyledCreators>
  );
};

export default Creators;
