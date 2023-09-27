import styled from 'styled-components';
import Title from '../../../ui/title/title';

export const Details = styled('div')``;

export const Name = styled(Title)`
  margin-bottom: 16px;
`;

export const Position = styled('div')`
  background-color: #CCE6FF;
  color: #006CFF;
  border-radius: 20px;
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 500;
  line-height: 80%;
`;

export const Info = styled('div')`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: flex-start;
  gap: 16px;
  font-size: 14px;
  color: #476887;
  margin-bottom: 8px;
`;

export const InfoItem = styled('div')`
  display: grid;
  grid-template-columns: 16px 1fr;
  align-items: flex-start;
  gap: 8px;
`;

export const InfoItemText = styled('span')`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;
