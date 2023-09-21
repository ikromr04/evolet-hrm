import styled from 'styled-components';
import Modal from '../../../../../ui/modal/modal';
import { StyledBlock } from '../../../../../ui/block/styled';
import Button from '../../../../../ui/button/button';
import TextField from '../../../../../ui/text-field/text-field';

export const EditModal = styled(Modal)`
  margin-left: auto;
`;

export const EditForm = styled(StyledBlock)`
  display: grid;
  grid-template-columns: 240px 240px;
  gap: 16px;
  padding: 16px 32px;
`;

export const SubmitButton = styled(Button)`
  align-self: flex-end;
`;

export const AddressField = styled(TextField)`
  grid-column: span 2;
`;
