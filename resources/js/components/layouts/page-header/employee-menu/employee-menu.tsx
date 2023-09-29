import { Avatar, DropdownIcon, Menu, StyledButton } from './styled';
import DropdownNavigation from '../../../ui/dropdown-navigation/dropdown-navigation';
import { AppRoute, DEFAULT_AVATAR_PATH } from '../../../../const';
import Hr from '../../../ui/hr/hr';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { logoutAction } from '../../../../store/employees-slice/employees-api-actions';
import { generatePath } from 'react-router-dom';
import Dropdown from '../../../ui/dropdown/dropdown';
import { getAuthorizedEmployee } from '../../../../store/employees-slice/employees-selector';

function EmployeeMenu(): JSX.Element {
  const employee = useAppSelector(getAuthorizedEmployee);
  const dispatch = useAppDispatch();

  if (!employee) {
    return <></>;
  }

  return (
    <Dropdown
      dropdownButton={
        <StyledButton>
          <Avatar
            src={employee.avatar || DEFAULT_AVATAR_PATH}
            width={32}
            height={32}
            alt={employee.name}
          />
          {employee.name}
          <DropdownIcon width={16} height={16} />
        </StyledButton>
      }
      dropdownMenu={
        <Menu>
          <DropdownNavigation href={generatePath(AppRoute.Employee, { employeeId: employee.id })}>
            Перейти к профилю
          </DropdownNavigation>
          <Hr />
          <DropdownNavigation onClick={() => dispatch(logoutAction())}>Выйти</DropdownNavigation>
        </Menu>
      }
    />
  );
};

export default EmployeeMenu;
