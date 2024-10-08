import styled from 'styled-components';

export const StyledFeatures = styled.section``;

export const SectionHeader = styled.div`
  width: 720px;
  margin: 100px auto 48px;
`;

export const FeaturesGrid = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 48px;
  grid-row-gap: 48px;
`;
