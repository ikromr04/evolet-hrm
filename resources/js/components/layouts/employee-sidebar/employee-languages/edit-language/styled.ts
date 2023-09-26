import styled from 'styled-components';
import Button from '../../../../ui/button/button';
import Modal from '../../../../ui/modal/modal';
import { StyledBlock } from '../../../../ui/block/styled';

export const EditModal = styled(Modal)`
  margin-left: auto;
`;

export const EditButton = styled(Button)`
  position: relative;
  z-index: 0;
`;

export const ButtonLabel = styled.span`
  position: absolute;
  left: 50%;
  z-index: 1;
  bottom: calc(100% + 8px);
  transform: translateX(-50%);
  min-width: max-content;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #1d1d1d;
  color: white;
  font-size: 11px;
  opacity: 0;
  visibility: hidden;
  transition: .3s;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    z-index: 1;
    width: 8px;
    height: 8px;
    background-color: #1d1d1d;
    transform: translateX(-50%) rotate(45deg);
  }

  ${EditButton}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

export const StyledForm = styled(StyledBlock)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 32px;
`;

export const ButtonsWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;
