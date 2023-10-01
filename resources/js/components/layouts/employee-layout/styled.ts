import styled from 'styled-components';

export const Section = styled('section')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px;
`;

export const SectionInner = styled('div')`
  display: grid;
  grid-template-columns: 75% 1fr;
  gap: 16px;
`;
