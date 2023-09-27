import { generatePath } from 'react-router-dom';
import NavigationButton from './navigation-button/navigation-button';
import { NavigationItem, NavigationList } from './styled';
import { Employee } from '../../../../types/employee';
import { AppRoute } from '../../../../const';

type EmployeeNavigationProps = {
  employee: Employee;
};

export default function EmployeeNavigation({ employee } : EmployeeNavigationProps): JSX.Element {
  return (
    <NavigationList>
      <NavigationItem>
        <NavigationButton href={generatePath(AppRoute.Employee, { employeeId: employee.id })}>
          Личное
        </NavigationButton>
        <NavigationButton href={generatePath(AppRoute.EmployeeWork, { employeeId: employee.id })}>
          Работа
        </NavigationButton>
      </NavigationItem>
    </NavigationList>
  );
};
