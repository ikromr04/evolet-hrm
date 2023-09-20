import { styled } from 'styled-components';
import { StyledBlock } from '../../ui/block/styled';

export const Navigation = styled(StyledBlock)`
  position: sticky;
  top: 86px;
  padding: 16px 0;
  z-index: 2;
  transition: .3s;
  height: max-content;
`;

export const Hr = styled.div`
  background-color: #d2d2d2;
  height: 1px;
  margin: 8px 0;
`;

