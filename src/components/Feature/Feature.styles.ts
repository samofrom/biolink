import styled from 'styled-components';

export const StyledFeature = styled.div<{ $isDark: boolean }>`
  width: 480px;
  height: 480px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
  border-radius: 52px;

  background-color: ${({ theme }) => theme.colors.bgWhite};

  opacity: ${(props) => (props.$isDark ? '.2' : '1')};
  z-index: 20;

  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FeatureLabel = styled.div`
  width: 400px;
  white-space: pre-line;
`;

export const FeatureContent = styled.div`
  width: 100%;
  height: 360px;

  img {
    width: 100%;
    height: auto;
  }
`;
