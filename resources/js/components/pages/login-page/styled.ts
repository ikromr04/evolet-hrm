import { styled } from 'styled-components';
import Box from '../../ui/box/box';

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 560px;
  align-self: center;
  margin-top: 32px;
  padding: 24px 32px;
`;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
