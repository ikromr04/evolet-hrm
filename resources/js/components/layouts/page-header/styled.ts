import { styled } from 'styled-components';
import Container from '../../ui/container/container';

export const Header = styled('header')`
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: white;
  align-items: center;
  box-shadow: 0px 1px 0px #dce5ef, 0px 1px 4px rgba(9, 8, 61, 0.08);
  display: flex;
  padding: 16px 0;
  transition: .3s;

  .modal-shown & {
    transform: translateY(-100%);
  }
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  gap: 32px;
`;
