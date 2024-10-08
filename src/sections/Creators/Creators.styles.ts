import styled from 'styled-components';

export const StyledCreators = styled.section<{ $isDark: boolean }>`
  position: relative;
  color: ${(props) =>
    props.$isDark
      ? props.theme.colors['bgWhite']
      : props.theme.colors['bgBlack']};
  margin-top: 128px;
  opacity: ${(props) => (props.$isDark ? '.2' : '1')};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 20;
`;

export const CreatorsFeed = styled.div`
  width: 1100px;

  display: flex;
  justify-content: center;
  gap: 48px;

  margin: 112px auto 0;
`;
