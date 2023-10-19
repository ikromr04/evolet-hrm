import { DropdownButton, Header, HeaderContainer, HeaderLogo } from './styled';
import EmployeeMenu from './employee-menu/employee-menu';
import DropdownMenuItem from '../../ui/dropdown-navigation/dropdown-navigation';
import Dropdown from '../../ui/dropdown/dropdown';
import PlusIcon from '../../icons/plus-icon';
import { useState } from 'react';
import Modal from '../../ui/modal/modal';
import EmployeeQuickAddForm from '../../forms/employee-quick-add-form/employee-quick-add-form';

function PageHeader(): JSX.Element {
  const [isCreateEmployeeOpen, setIsCreateEmployeeOpen] = useState(false);

  return (
    <>
      <Header>
        <HeaderContainer>
          <HeaderLogo />

          <Dropdown
            button={
              <DropdownButton small>Быстрое добавление</DropdownButton>
            }
            menu={
              <>
                <DropdownMenuItem onClick={() => setIsCreateEmployeeOpen(true)}>
                  <PlusIcon width={16} height={16} />
                  Создать сотрудника
                </DropdownMenuItem>
              </>
            }
          />
          <EmployeeMenu />
        </HeaderContainer>
      </Header>
      <Modal
        isOpen={isCreateEmployeeOpen}
        closeModalHandler={() => setIsCreateEmployeeOpen(false)}
      >
        <EmployeeQuickAddForm closeModalHandler={() => setIsCreateEmployeeOpen(false)} />
      </Modal>
    </>
  );
};

export default PageHeader;
