import React, { FC, useEffect, useState } from 'react';
import { Actions, Logo, Nav, NavLink, StyledHeader } from './Header.styles';

import LogoSVG from '../../../public/assets/svg/logo.svg';
import Button from '../../ui/Button/Button';
import { useTheme } from '../../hooks/useTheme';

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const { isDarkTheme } = useTheme();

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0) {
        setIsSticky(true);
      }

      if (scrollY === 0) {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <StyledHeader $isSticky={isSticky} $isDark={isDarkTheme}>
      <Logo href={'#'}>
        <LogoSVG />
      </Logo>

      <Nav>
        <NavLink href={'#'}>Features</NavLink>
        <NavLink href={'#'}>FAQ</NavLink>
      </Nav>

      <Actions>
        <Button variant={'text'} label={'Log in'} />
        <Button variant={'contained'} label={'Sign up'} />
      </Actions>
    </StyledHeader>
  );
};

export default Header;
