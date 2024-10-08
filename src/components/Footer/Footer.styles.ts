import styled from 'styled-components';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
});

export const StyledFooter = styled.footer`
  width: 1100px;

  position: relative;

  padding: 98px 0 80px;
  margin: 0 auto;
`;

export const FooterWave = styled.div`
  position: absolute;
  top: 90px;

  width: 100%;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 48px 0 32px;
`;

export const MobileApps = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;

  gap: 32px;
`;

export const MobileApp = styled.a`
  width: 125px;
  height: auto;

  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }

  img {
    width: 100%;
    height: auto;
  }

  transition: all 75ms cubic-bezier(0, 0, 0.2, 1);
`;

export const Social = styled.a<{ $logo?: boolean }>`
  ${(props) => props.$logo && 'svg {width: 30px; height: 31px}'}

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  transition: all 75ms cubic-bezier(0, 0, 0.2, 1);
`;

export const FooterNav = styled.nav`
  display: flex;
  gap: 32px;
`;

export const FooterNavItem = styled.a`
  font-family: ${inter.style.fontFamily};
  &:hover {
    color: ${({ theme }) => theme.colors['secondary']};
  }
`;
