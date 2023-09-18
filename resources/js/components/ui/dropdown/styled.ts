import styled, { css } from 'styled-components';

export const StyledDropdown = styled.div`
  position: relative;
  z-index: 1;
`;

export const DropdownButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
`;

export const MenuWrapper = styled('div').withConfig({
  shouldForwardProp: (props) => !['isOpen'].includes(props),
})<{ isOpen: boolean }>`
  position: absolute;
  right: 0;
  top: calc(100% + 24px);
  padding: 8px 0;
  min-width: max-content;
  z-index: 1;
  opacity: 1;
  visibility: visible;
  transition: .3s;

  ${({ isOpen }) => !isOpen && css`
    opacity: 0;
    visibility: hidden;
  `}
`;
