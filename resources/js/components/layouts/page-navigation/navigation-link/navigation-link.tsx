import { PropsWithChildren } from 'react';
import { StyledLink } from './styled';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../../../const';
import { useAppSelector } from '../../../../hooks';
import { getNavigationCollapsedState } from '../../../../store/app-slice/job-selector';

type NavigationLinkProps = PropsWithChildren<{
  href: string;
}>;

function NavigationLink({ children, href }: NavigationLinkProps): JSX.Element {
  const location = useLocation();
  const isCollapsed = useAppSelector(getNavigationCollapsedState);
  const isCurrent = location.pathname === href
    || (href === AppRoute.Employees && location.pathname.startsWith(AppRoute.Employees));

  return (
    <StyledLink
      to={href}
      isCurrent={isCurrent}
      isCollapsed={isCollapsed}
    >
      {children}
    </StyledLink>
  );
};

export default NavigationLink;
