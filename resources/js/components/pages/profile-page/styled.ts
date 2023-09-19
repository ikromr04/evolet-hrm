import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: end;
  gap: 24px;
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;
`;
