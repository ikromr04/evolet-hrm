import styled from 'styled-components';
import CaretIcon from '../../../icons/caret-icon';

export const Wrapper = styled('div')`
  position: relative;
  z-index: 1;
`;

export const StyledButton = styled('span')`
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #000f30;
  cursor: pointer;
`;

export const Avatar = styled.img`
  object-fit: cover;
  border-radius: 50%;
`;

export const DropdownIcon = styled(CaretIcon)`
  width: 8px;
  fill: #476887;
  transition: .3s;
`;
