import styled from 'styled-components';
import Modal from '../../../../ui/modal/modal';

export const StyledModal = styled(Modal)`
  margin-left: auto;
`;

export const Form = styled('form')`
  display: grid;
  grid-template-columns: repeat(2, calc((100% - 16px)/2));
  gap: 16px;
`;

export const WideColumn = styled('div')`
  grid-column: span 2;
`;
