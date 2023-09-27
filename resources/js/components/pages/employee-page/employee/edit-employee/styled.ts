import styled from 'styled-components';
import Modal from '../../../../ui/modal/modal';
import SelectField from '../../../../ui/select-field/select-field';

export const StyledModal = styled(Modal)`
  margin-left: auto;
`;

export const Form = styled('form')`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 8px));
  gap: 16px;
`;

export const JobField = styled(SelectField)`
  grid-column: span 2;
`;

export const Buttons = styled('div')`
  grid-column: span 2;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
