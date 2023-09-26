import styled from 'styled-components';
import Button from '../../../../../ui/button/button';

export const StyledItem = styled('div')`
  display: grid;
  grid-template-columns: 240px 240px 32px;
  gap: 16px;
`;

export const DeleteButton = styled(Button)`
  align-self: center;
  padding: 8px;
  margin-top: 19px;
`;
