import React, { FC } from 'react';

import Image from 'next/image';

import {
  FooterLinks,
  FooterNav,
  FooterNavItem,
  FooterWave,
  MobileApp,
  MobileApps,
  Social,
  Socials,
  StyledFooter,
} from './Footer.styles';

import FooterWaveSVG from '../../../public/assets/svg/footer-wave.svg';
import TwitterSVG from '../../../public/assets/svg/twitter.svg';
import InstagramSVG from '../../../public/assets/svg/instagram.svg';
import YoutubeSVG from '../../../public/assets/svg/youtube.svg';
import TiktokSVG from '../../../public/assets/svg/tiktok.svg';
import Logo from '../../../public/assets/svg/logo.svg';

import GooglePlay from '../../../public/assets/images/google-play.png';
import AppStore from '../../../public/assets/images/app-store.png';

type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <FooterWave>
        <FooterWaveSVG />
      </FooterWave>
      <FooterLinks>
        <MobileApps>
          <MobileApp>
            <Image src={GooglePlay} alt={'Google Play'} />
          </MobileApp>
          <MobileApp>
            <Image src={AppStore} alt={'App Store'} />
          </MobileApp>
        </MobileApps>
        <Socials>
          <Social href={'#'}>
            <TwitterSVG />
          </Social>
          <Social href={'#'}>
            <InstagramSVG />
          </Social>
          <Social href={'#'}>
            <YoutubeSVG />
          </Social>
          <Social href={'#'}>
            <TiktokSVG />
          </Social>
          <Social href={'#'} $logo>
            <Logo />
          </Social>
        </Socials>
      </FooterLinks>
      <FooterNav>
        <FooterNavItem href={'#'}>Features</FooterNavItem>
        <FooterNavItem href={'#'}>Help Center</FooterNavItem>
        <FooterNavItem href={'#'}>Terms of Use</FooterNavItem>
        <FooterNavItem href={'#'}>Privacy Policy</FooterNavItem>
        <FooterNavItem href={'#'}>Report</FooterNavItem>
      </FooterNav>
    </StyledFooter>
  );
};

export default Footer;
