import { PropsWithChildren } from 'react';
import { StyledMenu } from './styled';

type DropdownMenuProps = PropsWithChildren<{
  className?: string;
}>;

export default function DropdownMenu({ children, className }: DropdownMenuProps): JSX.Element {
  return (
    <StyledMenu className={className}>{children}</StyledMenu>
  );
};
