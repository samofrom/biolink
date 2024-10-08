import React, { FC } from 'react';
import { HeroButton, InputContainer, Link, StyledInput } from './Input.styles';
import Typography from '../Typography/Typography';

type InputProps = {};

const Input: FC<InputProps> = () => {
  return (
    <InputContainer>
      <Link>bio.link/</Link>
      <StyledInput placeholder="yourname" />
      <HeroButton>Claim my link</HeroButton>
    </InputContainer>
  );
};

export default Input;
