import { Avatar, DropdownIcon, StyledButton } from './styled';
import DropdownMenu from '../../../ui/dropdown-menu/dropdown-menu';
import DropdownNavigation from '../../../ui/dropdown-navigation/dropdown-navigation';
import { AppRoute } from '../../../../const';
import Hr from '../../../ui/hr/hr';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { logoutAction } from '../../../../store/employees-slice/employees-api-actions';
import { generatePath } from 'react-router-dom';
import Dropdown from '../../../ui/dropdown/dropdown';
import { getAuthorizedEmployee } from '../../../../store/employees-slice/employees-selector';

export default function UserNavigation(): JSX.Element {
  const user = useAppSelector(getAuthorizedEmployee);
  const dispatch = useAppDispatch();

  return (
    <Dropdown
      dropdownButton={
        <StyledButton>
          <Avatar
            src={user?.avatar || '/img/default-avatar.png'}
            width={32}
            height={32}
            alt={user?.name}
          />
          {user?.name}
          <DropdownIcon />
        </StyledButton>
      }
      dropdownMenu={
        <DropdownMenu>
          <DropdownNavigation href={generatePath(AppRoute.Employee, { employeeId: user?.id || '' })}>
            Перейти к профилю
          </DropdownNavigation>
          <Hr />
          <DropdownNavigation onClick={() => dispatch(logoutAction())}>Выйти</DropdownNavigation>
        </DropdownMenu>
      }
      menuTop={8}
    />
  );
};
