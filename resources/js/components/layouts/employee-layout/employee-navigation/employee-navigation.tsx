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
        Профиль
      </NavigationLink>
      <NavigationLink href={generatePath(AppRoute.EmployeeWork, { employeeId: employee.id })}>
        Работа
      </NavigationLink>
      <NavigationLink href={generatePath(AppRoute.EmployeeEquipment, { employeeId: employee.id })}>
        Оборудование
      </NavigationLink>
      <NavigationLink href={generatePath(AppRoute.EmployeeVacation, { employeeId: employee.id })}>
        Отпуск
      </NavigationLink>
      <NavigationLink href={generatePath(AppRoute.EmployeePIR, { employeeId: employee.id })}>
        ПИР
      </NavigationLink>
      <NavigationLink href={generatePath(AppRoute.EmployeeKPI, { employeeId: employee.id })}>
        KPI
      </NavigationLink>
      <NavigationLink href={generatePath(AppRoute.EmployeeAttendance, { employeeId: employee.id })}>
        Посещаемость
      </NavigationLink>
    </Navigation>
  );
};

export default memo(EmployeeNavigation);
