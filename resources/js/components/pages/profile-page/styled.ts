import styled from 'styled-components';
import { StyledTitle } from '../../ui/title/styled';

export const Main = styled.main``;

export const Header = styled.header`
  display: flex;
  align-items: end;
  gap: 24px;
`;

export const Username = styled(StyledTitle)`
  margin-bottom: 8px;
`;

export const HeaderInner = styled.div``;

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  font-weight: 400;
  color: #476887;
`;

export const DetailsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
