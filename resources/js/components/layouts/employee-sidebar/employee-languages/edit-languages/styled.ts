import styled from 'styled-components';
import Button from '../../../../ui/button/button';
import { StyledInfo } from '../../../../ui/info/styled';

export const EditButton = styled(Button)`
  position: relative;
  margin-left: auto;

  &:hover ${StyledInfo} {
    opacity: 1;
    visibility: visible;
  }
`;
