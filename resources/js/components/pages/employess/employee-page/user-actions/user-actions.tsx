import EllipsisIcon from '../../../icons/ellipsis-icon';
import DropdownMenu from '../../../ui/dropdown-menu/dropdown-menu';
import DropdownNavigation from '../../../ui/dropdown-navigation/dropdown-navigation';
import Dropdown from '../../../ui/dropdown/dropdown';
import { StyledButton, Wrapper } from './styled';
import Hr from '../../../ui/hr/hr';

export default function UserActions(): JSX.Element {
  return (
    <Dropdown
      dropdownButton={
        <StyledButton>
          <EllipsisIcon width={12} />
        </StyledButton>
      }
      dropdownMenu={
        <DropdownMenu>
          <DropdownNavigation>Сбросить пароль</DropdownNavigation>
          <Hr />
          <DropdownNavigation>Уволить сотрудника</DropdownNavigation>
        </DropdownMenu>
      }
    />
  );
}
