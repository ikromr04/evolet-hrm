import { PropsWithChildren } from 'react';
import { StyledNavigation } from './styled';
import { Link } from 'react-router-dom';

type DropdownNavigationProps = PropsWithChildren<{
  href?: string;
  [rest: string]: unknown;
}>;

export default function DropdownNavigation({
  href,
  children,
  ...rest
} : DropdownNavigationProps): JSX.Element {
  return (
    <StyledNavigation
      as={href ? Link : ''}
      to={href}
      {...rest}
    >
      {children}
    </StyledNavigation>
  );
}
