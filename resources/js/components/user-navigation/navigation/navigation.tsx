import { Link } from 'react-router-dom';
import { Hr, NavigationItem, StyledNavigation } from './styled';
import { AppRoute } from '../../../const';

export default function Navigation(): JSX.Element {
  return (
    <StyledNavigation>
      <NavigationItem as={Link} to={AppRoute.Profile}>Перейти к профилю</NavigationItem>
      <NavigationItem as={Link} to={AppRoute.Profile}>Настройка учетной записи</NavigationItem>

      <Hr />
      
      <NavigationItem>Выйти</NavigationItem>
    </StyledNavigation>
  );
}
