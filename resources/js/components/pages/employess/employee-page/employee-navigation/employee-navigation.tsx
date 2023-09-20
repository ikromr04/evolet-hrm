import { generatePath } from 'react-router-dom';
import { AppRoute } from '../../../../../const';
import { Employee } from '../../../../../types/employees';
import NavigationButton from './navigation-button/navigation-button';
import { NavigationItem, NavigationList } from './styled';

type EmployeeNavigationProps = {
  employee: Employee;
}

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
        <NavigationButton href={generatePath(AppRoute.EmployeeAbsence, { employeeId: employee.id })}>
          Отсутствия
        </NavigationButton>
        <NavigationButton href={generatePath(AppRoute.EmployeeEfficiency, { employeeId: employee.id })}>
          Эффективность
        </NavigationButton>
        <NavigationButton href={generatePath(AppRoute.EmployeeDocuments, { employeeId: employee.id })}>
          Документы
        </NavigationButton>
      </NavigationItem>
    </NavigationList>
  );
}
