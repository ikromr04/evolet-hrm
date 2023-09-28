import styled from 'styled-components';

export const StyledLayout = styled('div')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px;
  padding-top: 24px;
`;

export const LayoutTop = styled('div')`
  display: flex;
  align-items: end;
  gap: 24px;
`;

export const PageWrapper = styled('div')`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 16px;
`;

export const HeaderInner = styled('div')`
  align-self: flex-end;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  flex-grow: 1;
  min-height: 88px;
`;

export const Actions = styled('div')`
  display: flex;
  gap: 8px;
`;
