import { Link } from 'react-router-dom';
import { Hr, NavigationItem, StyledNavigation } from './styled';
import { AppRoute } from '../../../const';
import { useAppDispatch } from '../../../hooks';
import { logoutAction } from '../../../store/auth-slice/api-actions';

export default function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <StyledNavigation>
      <NavigationItem as={Link} to={AppRoute.Profile}>Перейти к профилю</NavigationItem>
      <NavigationItem as={Link} to={AppRoute.Profile}>Настройка учетной записи</NavigationItem>

      <Hr />

      <NavigationItem onClick={() => dispatch(logoutAction())}>Выйти</NavigationItem>
    </StyledNavigation>
  );
}
