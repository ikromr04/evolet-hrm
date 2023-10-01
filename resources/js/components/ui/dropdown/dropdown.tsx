import { memo, useState } from 'react';
import { StyledDropdown, DropdownButton, DropdownMenu } from './styled';
import { useOutsideClick } from '../../../hooks/use-outside-click';
import { useEscapeKeydown } from '../../../hooks/use-escape-keydown';

type DropdownProps = {
  className?: string;
  button: JSX.Element;
  menu: JSX.Element;
  fullWidthMenu?: boolean;
};

function Dropdown({
  className,
  button,
  menu,
  fullWidthMenu = false,
}: DropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  useEscapeKeydown(() => setIsOpen(false));

  return (
    <StyledDropdown ref={ref} className={className}>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {button}
      </DropdownButton>

      <DropdownMenu
        onClick={() => setIsOpen(false)}
        isOpen={isOpen}
        fullWidthMenu={fullWidthMenu}
      >
        {menu}
      </DropdownMenu>
    </StyledDropdown>
  );
};

export default memo(Dropdown);
