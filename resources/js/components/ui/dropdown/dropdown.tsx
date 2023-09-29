import { memo, useState } from 'react';
import { DropdownButton, MenuWrapper, StyledDropdown } from './styled';
import { useOutsideClick } from '../../../hooks/use-outside-click';
import { useEscapeKeydown } from '../../../hooks/use-escape-keydown';

type DropdownProps = {
  dropdownButton: JSX.Element;
  dropdownMenu: JSX.Element;
  menuFullWidth?: boolean;
};

function Dropdown({
  dropdownButton,
  dropdownMenu,
  menuFullWidth = false,
}: DropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  useEscapeKeydown(() => setIsOpen(false));

  return (
    <StyledDropdown ref={ref}>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {dropdownButton}
      </DropdownButton>

      <MenuWrapper
        isOpen={isOpen}
        menuFullWidth={menuFullWidth}
        onClick={() => setIsOpen(false)}
      >
        {dropdownMenu}
      </MenuWrapper>
    </StyledDropdown>
  );
};

export default memo(Dropdown);
