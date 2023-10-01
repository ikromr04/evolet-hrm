import { generatePath, useParams } from 'react-router-dom';
import { Navigation } from './styled';
import { AppRoute } from '../../../../const';
import { memo } from 'react';
import NavigationLink from './navigation-link/navigation-link';

function EmployeeNavigation(): JSX.Element {
  const params = useParams();

  if (!params.employeeId) {
    return <></>;
  }

  return (
    <Navigation>
      <NavigationLink href={generatePath(AppRoute.Employee, { employeeId: params.employeeId })}>
        Личное
      </NavigationLink>
      <NavigationLink href={generatePath(AppRoute.EmployeeWork, { employeeId: params.employeeId })}>
        Работа
      </NavigationLink>
    </Navigation>
  );
};

export default memo(EmployeeNavigation);
