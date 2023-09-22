import styled from 'styled-components';
import { StyledTitle } from '../../../ui/title/styled';

export const Details = styled.div``;

export const Name = styled(StyledTitle)`
  margin-bottom: 16px;
`;

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

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: #476887;
  margin-bottom: 8px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
