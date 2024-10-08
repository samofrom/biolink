import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FeatureContent, FeatureLabel, StyledFeature } from './Feature.styles';
import Typography from '../../ui/Typography/Typography';
import { useIntersection } from '../../hooks/useIntersection';
import { useTheme } from '../../hooks/useTheme';

type FeatureProps = {
  content: ReactNode;
  label: string;
};

const Feature: FC<FeatureProps> = ({ content, label }) => {
  const { ref, isIntersecting } = useIntersection({
    threshold: [0.25],
    isBottomToTop: true,
  });

  const { isDarkTheme } = useTheme();

  return (
    <StyledFeature ref={ref} $isDark={isDarkTheme}>
      <FeatureContent>{content}</FeatureContent>
      <FeatureLabel>
        <Typography variant={'h2'} centerAlign>
          {label}
        </Typography>
      </FeatureLabel>
    </StyledFeature>
  );
};

export default Feature;
