import styled from 'styled-components';
import Modal from '../../../../ui/modal/modal';
import { StyledBlock } from '../../../../ui/block/styled';
import Button from '../../../../ui/button/button';
import Text from '../../../../ui/text/text';

export const DeleteModal = styled(Modal)`
  margin-left: auto;
`;

export const DeleteWindow = styled(StyledBlock)`
  padding: 16px 32px;
  min-width: 560px;
  max-width: 560px;
`;

export const SubmitButton = styled(Button)`
  margin-left: auto;
`;

export const EducationText = styled(Text)`
  font-size: 13px;
`;
