import { generatePath } from 'react-router-dom';
import { Navigation } from './styled';
import { AppRoute } from '../../../../const';
import { memo } from 'react';
import NavigationLink from './navigation-link/navigation-link';
import { useAppSelector } from '../../../../hooks';
import { getEmployee } from '../../../../store/employees-slice/employees-selector';

function EmployeeNavigation(): JSX.Element {
  const employee = useAppSelector(getEmployee);

  if (!employee) {
    return <></>;
  }

  return (
    <Navigation>
      <NavigationLink href={generatePath(AppRoute.Employee, { employeeId: employee.id })}>
        Личное
      </NavigationLink>
      <NavigationLink href={generatePath(AppRoute.EmployeeWork, { employeeId: employee.id })}>
        Опыт
      </NavigationLink>
    </Navigation>
  );
};

export default memo(EmployeeNavigation);
