import { styled } from 'styled-components';
import Container from '../../ui/container/container';

export const Layout = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 80px;
`;

export const LayoutContainer = styled(Container)`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;
