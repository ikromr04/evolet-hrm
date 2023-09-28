import styled from 'styled-components';
import Modal from '../../../../ui/modal/modal';
import Button from '../../../../ui/button/button';
import TextField from '../../../../ui/text-field/text-field';

export const StyledModal = styled(Modal)`
  margin-left: auto;
`;

export const Form = styled('form')`
  display: grid;
  grid-template-columns: repeat(2, calc((100% - 16px)/2));
  gap: 16px;
`;

export const SubmitButton = styled(Button)`
  align-self: flex-end;
`;

export const AddressField = styled(TextField)`
  grid-column: span 2;
`;

export const ChildrenField = styled(TextField)`
  grid-column: span 2;
`;

export const Buttons = styled('div')`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  grid-column: span 2;
`;
