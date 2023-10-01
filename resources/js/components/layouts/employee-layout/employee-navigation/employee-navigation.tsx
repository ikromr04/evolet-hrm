import { generatePath } from 'react-router-dom';
import { Navigation } from './styled';
import { Employee } from '../../../../types/employee';
import { AppRoute } from '../../../../const';
import { memo } from 'react';
import NavigationLink from './navigation-link/navigation-link';

type EmployeeNavigationProps = {
  employee: Employee;
};

function EmployeeNavigation({ employee } : EmployeeNavigationProps): JSX.Element {
  return (
    <Navigation>
      <NavigationLink href={generatePath(AppRoute.Employee, { employeeId: employee.id })}>
        Личное
      </NavigationLink>
      <NavigationLink href={generatePath(AppRoute.EmployeeWork, { employeeId: employee.id })}>
        Работа
      </NavigationLink>
    </Navigation>
  );
};

export default memo(EmployeeNavigation);
