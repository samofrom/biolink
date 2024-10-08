import React, { FC } from 'react';

import { BaseTypography, Body, BodyS, H1, H2, H3 } from './Typography.styles';

export type Variant = 'h1' | 'h2' | 'h3' | 'body' | 'bodyS';

export type TypographyProps = {
  children: React.ReactNode;
  variant: Variant;
} & Partial<{
  centerAlign: boolean;
  animate: boolean;
}>;

const variantMap: Record<Variant, FC<BaseTypography>> = {
  h1: H1,
  h2: H2,
  h3: H3,
  body: Body,
  bodyS: BodyS,
};

const Typography: FC<TypographyProps> = ({
  children,
  variant,
  centerAlign = false,
  animate = false,
}) => {
  const Tag = variantMap[variant];

  return (
    <Tag $centerAlign={centerAlign} $animate={animate}>
      {children}
    </Tag>
  );
};

export default Typography;
