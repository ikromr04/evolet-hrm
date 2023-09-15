import styled from 'styled-components';
import { StyledTitle } from '../../ui/title/styled';

export const Main = styled.main``;

export const Header = styled.header`
  display: flex;
  align-items: end;
  gap: 24px;
`;

export const Username = styled(StyledTitle)`
  margin-bottom: 16px;
`;

export const UserDetails = styled.div``;

export const Position = styled.div`
  background-color: #CCE6FF;
  color: #006CFF;
  border-radius: 20px;
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 500;
  line-height: 80%;
`;
