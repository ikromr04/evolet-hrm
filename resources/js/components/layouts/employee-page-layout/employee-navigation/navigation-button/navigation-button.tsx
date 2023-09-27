import { PropsWithChildren } from 'react';
import { StyledNavigation } from './styled';
import { Link, useLocation } from 'react-router-dom';

type NavigationButtonProps = PropsWithChildren<{
  href?: string;
  [rest: string]: unknown;
}>;

export default function NavigationButton({
  href,
  children,
  ...rest
}: NavigationButtonProps): JSX.Element {
  const location = useLocation();
  const isCurrent = location.pathname === href;

  return (
    <StyledNavigation
      as={href ? Link : ''}
      to={href}
      isCurrent={isCurrent}
      {...rest}
    >
      {children}
    </StyledNavigation>
  );
};
