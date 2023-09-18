import { PropsWithChildren } from 'react';
import { StyledMenu } from './styled';

export default function DropdownMenu({ children }: PropsWithChildren): JSX.Element {
  return (
    <StyledMenu>{children}</StyledMenu>
  );
}
