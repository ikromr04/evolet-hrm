import { Avatar, DropdownIcon, StyledButton } from './styled';
import Dropdown from '../../../ui/dropdown/dropdown';
import { getUser } from '../../../../services/user';
import DropdownMenu from '../../../ui/dropdown-menu/dropdown-menu';
import DropdownNavigation from '../../../ui/dropdown-navigation/dropdown-navigation';
import { AppRoute } from '../../../../const';
import Hr from '../../../ui/hr/hr';
import { useAppDispatch } from '../../../../hooks';
import { logoutAction } from '../../../../store/auth-slice/api-actions';

export default function UserNavigation(): JSX.Element {
  const user = getUser();
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
          <DropdownNavigation href={AppRoute.Profile}>Перейти к профилю</DropdownNavigation>
          <DropdownNavigation href={AppRoute.Profile}>Настройка учетной записи</DropdownNavigation>
          <Hr />
          <DropdownNavigation onClick={() => dispatch(logoutAction())}>Выйти</DropdownNavigation>
        </DropdownMenu>
      }
    />
  );
}
