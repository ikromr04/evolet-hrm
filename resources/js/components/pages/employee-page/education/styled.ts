import styled from 'styled-components';

export const EducationsWrapper = styled('div')`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export const Actions = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;
