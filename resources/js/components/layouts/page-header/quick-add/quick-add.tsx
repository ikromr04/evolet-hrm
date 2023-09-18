import PlusIcon from '../../../icons/plus-icon';
import DropdownMenu from '../../../ui/dropdown-menu/dropdown-menu';
import Dropdown from '../../../ui/dropdown/dropdown';
import { StyledButton } from './styled';

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
          Dropdown menu
        </DropdownMenu>
      }
    />
  );
}
