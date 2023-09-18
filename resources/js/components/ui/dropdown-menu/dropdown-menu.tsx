import { PropsWithChildren } from 'react';
import { StyledDropdown } from './styled';

export default function DropdownMenu({ children }: PropsWithChildren): JSX.Element {
  return (
    <StyledDropdown>
      {children}
    </StyledDropdown>
  );
}
