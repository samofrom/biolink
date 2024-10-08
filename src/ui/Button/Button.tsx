import React, { FC } from 'react';
import { BaseButton, ContainedButton, TextButton } from './Button.styles';

export type Variant = 'contained' | 'text';

type ButtonProps = {
  label: string;
} & Partial<{
  onClick: () => void;
  variant: Variant;
}>;

const variantMap: Record<Variant, FC<BaseButton>> = {
  contained: ContainedButton,
  text: TextButton,
};

const Button: FC<ButtonProps> = ({
  label,
  onClick = () => {},
  variant = 'contained',
}) => {
  const Tag = variantMap[variant];

  return <Tag onClick={onClick}>{label}</Tag>;
};

export default Button;
