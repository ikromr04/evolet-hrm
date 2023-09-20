import { styled } from 'styled-components';
import Container from '../../ui/container/container';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LayoutContainer = styled(Container)`
  display: flex;
  gap: 16px;
  z-index: 0;
  padding-bottom: 80px;
`;
