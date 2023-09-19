import PlusIcon from '../../../icons/plus-icon';
import DropdownMenu from '../../../ui/dropdown-menu/dropdown-menu';
import Dropdown from '../../../ui/dropdown/dropdown';
import { StyledButton } from './styled';
import DropdownNavigation from '../../../ui/dropdown-navigation/dropdown-navigation';

export default function QuickAdd(): JSX.Element {
  return (
    <Dropdown
      dropdownButton={
        <StyledButton>
          <PlusIcon width={12} /> Быстрое добавление
        </StyledButton>
      }
      dropdownMenu={
        <DropdownMenu>
          <DropdownNavigation>
            <PlusIcon width={12} /> Создать сотрудника
          </DropdownNavigation>
          <DropdownNavigation>
            <PlusIcon width={12} /> Создать кандидата
          </DropdownNavigation>
          <DropdownNavigation>
            <PlusIcon width={12} /> Создать отдел
          </DropdownNavigation>
        </DropdownMenu>
      }
      menuTop={8}
    />
  );
}
