import styled from 'styled-components';
import Image from 'next/image';

export const StyledPro = styled.section`
  margin-top: 120px;
`;

export const ProBackground = styled.div<{ $isDark: boolean }>`
  position: relative;

  width: 1110px;
  margin: 0 auto;
  padding: 48px 0;

  background-color: ${({ theme }) => theme.colors['bgBlack']};
  border-radius: ${(props) => (props.$isDark ? '0' : '52')}px;

  transform: ${(props) => (props.$isDark ? 'scale(1)' : 'scale(0.95)')};

  color: ${({ theme }) => theme.colors['bgWhite']};

  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Blackout = styled.div<{ $isDark: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: ${({ theme }) => theme.colors['bgBlack']};
  border-radius: ${(props) => (props.$isDark ? '0' : '52')}px;
  transform: ${(props) => (props.$isDark ? 'scale(2)' : 'scale(1)')};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
`;

export const ProGrid = styled.div`
  max-width: 1000px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 48px;
  grid-row-gap: 48px;

  margin: 32px auto 0;
`;

export const ProGridItem = styled.div`
  width: 480px;
  height: 480px;

  display: flex;
  flex-direction: column;

  gap: 48px;

  background-color: ${({ theme }) => theme.colors['bgGrey']};
  border: ${({ theme }) => theme.stroke['dark']};
  border-radius: 52px;

  overflow: hidden;
`;

export const ProGridItemContent = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  justify-content: center;
`;

export const ProGridItemImage = styled(Image)`
  width: auto;
  height: 100%;
  margin: 0 auto;
`;

export const ProGridItemText = styled.div`
  height: 224px;
`;
