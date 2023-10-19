import { Avatar, DropdownButton, DropdownIcon } from './styled';
import { AppRoute, DEFAULT_AVATAR_PATH } from '../../../../const';
import Hr from '../../../ui/hr/hr';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { logoutAction } from '../../../../store/employees-slice/employees-api-actions';
import { generatePath } from 'react-router-dom';
import Dropdown from '../../../ui/dropdown/dropdown';
import {
  getAuthorizedEmployee,
  getAuthorizedEmployeeAvatar
} from '../../../../store/employees-slice/employees-selector';
import DropdownMenuItem from '../../../ui/dropdown-navigation/dropdown-navigation';

function EmployeeMenu(): JSX.Element {
  const employee = useAppSelector(getAuthorizedEmployee);
  const avatar = useAppSelector(getAuthorizedEmployeeAvatar);
  const dispatch = useAppDispatch();

  if (!employee) {
    return <></>;
  }

  return (
    <Dropdown
      button={
        <DropdownButton>
          <Avatar
            src={avatar || DEFAULT_AVATAR_PATH}
            width={32}
            height={32}
            alt={employee.name}
          />
          {employee.name}
          <DropdownIcon width={16} height={16} />
        </DropdownButton>
      }
      menu={
        <>
          <DropdownMenuItem href={generatePath(AppRoute.Employee, { employeeId: employee.id })}>
            Перейти к профилю
          </DropdownMenuItem>
          <Hr />
          <DropdownMenuItem onClick={() => dispatch(logoutAction())}>Выйти</DropdownMenuItem>
        </>
      }
    />
  );
};

export default EmployeeMenu;
