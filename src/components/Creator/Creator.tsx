import React, { FC } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import {
  CreatorAvatar,
  CreatorAvatarWrapper,
  CreatorName,
  CreatorVerify,
  StyledCreator,
} from './Creator.styles';
import Typography from '../../ui/Typography/Typography';

import Verified from '../../../public/assets/svg/verified.svg';

type CreatorProps = {
  avatar: StaticImport;
  name: string;
  link: string;
};

const Creator: FC<CreatorProps> = ({ avatar, name, link }) => {
  return (
    <StyledCreator href={'#'}>
      <CreatorAvatarWrapper>
        <CreatorAvatar src={avatar} alt={name} />
      </CreatorAvatarWrapper>
      <CreatorName>
        {name}
        <CreatorVerify>
          <Verified />
        </CreatorVerify>
      </CreatorName>
      <Typography variant={'bodyS'} centerAlign>
        <span>{link}</span>
      </Typography>
    </StyledCreator>
  );
};

export default Creator;
