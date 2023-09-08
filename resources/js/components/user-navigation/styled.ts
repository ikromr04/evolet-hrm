import styled from 'styled-components';
import CaretIcon from '../icons/caret-icon';

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const StyledButton = styled.button`
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme }) => theme.color.text.dark };
  cursor: pointer;
`;

export const Avatar = styled.img`
  object-fit: cover;
  border-radius: 50%;
`;

export const DropdownIcon = styled(CaretIcon)<{ open?: boolean }>`
  width: 8px;
  fill: ${({ theme }) => theme.color.text.gray };
  transition: .3s;
  ${({ open }) => open && `
    transform: scale(-1);
  `}
`;
