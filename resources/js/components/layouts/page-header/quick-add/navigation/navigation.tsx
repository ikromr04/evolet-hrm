import PlusIcon from '../../../../icons/plus-icon';
import { NavigationItem, StyledNavigation } from './styled';

export default function Navigation(): JSX.Element {
  return (
    <StyledNavigation>
      <NavigationItem>
        <PlusIcon width={12} />
        Создать сотрудника
      </NavigationItem>
      <NavigationItem>
        <PlusIcon width={12} />
        Создать кандидата
      </NavigationItem>
      <NavigationItem>
        <PlusIcon width={12} />
        Создать отдел
      </NavigationItem>
    </StyledNavigation>
  );
}
