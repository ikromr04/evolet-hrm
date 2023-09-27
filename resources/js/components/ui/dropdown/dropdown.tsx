import { useState } from 'react';
import { DropdownButton, MenuWrapper, StyledDropdown } from './styled';
import { useOutsideClick } from '../../../hooks/use-outside-click';
import { useEscapeKeydown } from '../../../hooks/use-escape-keydown';
import { useOnRouteChange } from '../../../hooks/use-on-route-change';

type DropdownProps = {
  dropdownButton: JSX.Element;
  dropdownMenu: JSX.Element;
  menuFullWidth?: boolean;
  menuTop?: number;
  onMenuClickHide?: boolean;
};

export default function Dropdown({
  dropdownButton,
  dropdownMenu,
  menuFullWidth = false,
  menuTop = 0,
  onMenuClickHide = false
}: DropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  useEscapeKeydown(() => setIsOpen(false));
  useOnRouteChange(() => setIsOpen(false));

  return (
    <StyledDropdown ref={ref}>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {dropdownButton}
      </DropdownButton>

      <MenuWrapper
        isOpen={isOpen}
        menuFullWidth={menuFullWidth}
        menuTop={menuTop}
        onClick={() => onMenuClickHide && setIsOpen(false)}
      >
        {dropdownMenu}
      </MenuWrapper>
    </StyledDropdown>
  );
};
