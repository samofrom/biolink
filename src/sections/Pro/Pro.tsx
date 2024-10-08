import React, { FC, useContext, useEffect, useRef } from 'react';
import {
  Blackout,
  ProBackground,
  ProGrid,
  ProGridItem,
  ProGridItemContent,
  ProGridItemImage,
  ProGridItemText,
  StyledPro,
} from './Pro.styles';
import Typography from '../../ui/Typography/Typography';

import MultipleSites from '../../../public/assets/images/multiple-sites.png';
import CustomDomains from '../../../public/assets/images/custom-domains.png';
import EmailSubscribers from '../../../public/assets/images/email-subscribers.png';
import BlogPosts from '../../../public/assets/images/blog-posts.png';
import { useIntersection } from '../../hooks/useIntersection';

import { useTheme } from '../../hooks/useTheme';

type ProProps = {};

const Pro: FC<ProProps> = () => {
  const { isDarkTheme, setDarkTheme } = useTheme();

  const { ref, isIntersecting } = useIntersection({
    threshold: [0.35],
    onIntersection: () => {
      setDarkTheme(isIntersecting);
    },
  });

  return (
    <StyledPro ref={ref}>
      <ProBackground $isDark={isDarkTheme}>
        <Typography variant={'h1'} centerAlign animate={isDarkTheme}>
          <span>Pro. </span>
          {'For creators who\nwant more.'}
        </Typography>
        <ProGrid>
          <ProGridItem>
            <ProGridItemContent>
              <ProGridItemImage src={MultipleSites} alt={'Multiple sites'} />
            </ProGridItemContent>
            <ProGridItemText>
              <Typography variant={'h2'} centerAlign>
                Create unlimited <span>sites</span>
              </Typography>
            </ProGridItemText>
          </ProGridItem>
          <ProGridItem>
            <ProGridItemContent>
              <ProGridItemImage src={CustomDomains} alt={'Custom Domains'} />
            </ProGridItemContent>
            <ProGridItemText>
              <Typography variant={'h2'} centerAlign>
                Use your <span>own domain name</span>
                {'\n'}
                to host your sites
              </Typography>
            </ProGridItemText>
          </ProGridItem>
          <ProGridItem>
            <ProGridItemContent>
              <ProGridItemImage
                src={EmailSubscribers}
                alt={'Email Subscribers'}
              />
            </ProGridItemContent>
            <ProGridItemText>
              <Typography variant={'h2'} centerAlign>
                Build an <span>email list</span>,{'\n'} a creator&apos;s biggest
                asset
              </Typography>
            </ProGridItemText>
          </ProGridItem>
          <ProGridItem>
            <ProGridItemContent>
              <ProGridItemImage src={BlogPosts} alt={'Blog posts'} />
            </ProGridItemContent>
            <ProGridItemText>
              <Typography variant={'h2'} centerAlign>
                <span>Publish posts</span> and{'\n'}
                alert your subscribers
              </Typography>
            </ProGridItemText>
          </ProGridItem>
        </ProGrid>
        <Blackout $isDark={isDarkTheme} />
      </ProBackground>
    </StyledPro>
  );
};

export default Pro;
