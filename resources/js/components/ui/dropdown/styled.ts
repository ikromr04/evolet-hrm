import styled, { css } from 'styled-components';

export const StyledDropdown = styled.div`
  display: flex;
  position: relative;
`;

export const DropdownButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
`;

export const MenuWrapper = styled('div').withConfig({
  shouldForwardProp: (props) => !['isOpen', 'menuFullWidth', 'menuTop'].includes(props),
})<{ isOpen: boolean, menuFullWidth: boolean, menuTop: number }>`
  position: absolute;
  right: 0;
  top: calc(100% + ${({ menuTop }) => menuTop + 'px'});
  padding: 0;
  min-width: max-content;
  z-index: 1;
  opacity: 1;
  visibility: visible;
  transition: .3s;
  ${({ menuFullWidth }) => menuFullWidth && css`
    width: 100%;
  `}

  ${({ isOpen }) => !isOpen && css`
    opacity: 0;
    visibility: hidden;
  `}
`;
