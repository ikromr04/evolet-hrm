import { styled } from 'styled-components';
import Box from '../../ui/box/box';

export const StyledBox = styled(Box)`
  position: sticky;
  top: 80px;
  padding: 16px 0;
  z-index: 1;
  transition: .3s;
  height: max-content;
`;
