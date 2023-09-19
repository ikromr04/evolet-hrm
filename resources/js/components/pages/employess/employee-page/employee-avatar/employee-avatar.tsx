import { BaseSyntheticEvent } from 'react';
import { StyledAvatar, Label} from './styled';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { deleteEmployeeAvatar, updateEmployeeAvatar } from '../../../../../store/employees-slice/employees-api-actions';
import { getAuthEmployee, getEmployee } from '../../../../../store/employees-slice/employees-selector';
import Dropdown from '../../../../ui/dropdown/dropdown';
import DropdownMenu from '../../../../ui/dropdown-menu/dropdown-menu';
import DropdownNavigation from '../../../../ui/dropdown-navigation/dropdown-navigation';
import { setAuthEmployee, setEmployee } from '../../../../../store/employees-slice/employees-slice';

export default function EmployeeAvatar(): JSX.Element {
  const employee = useAppSelector(getEmployee);
  const user = useAppSelector(getAuthEmployee);
  const dispatch = useAppDispatch();

  const handleInputChange = async (evt: BaseSyntheticEvent) => {
    if (employee && user) {
      const form = new FormData();
      form.append('avatar', evt.target.files[0]);
      dispatch(updateEmployeeAvatar({
        form,
        employeeId: employee.id,
        onSuccess(employee) {
          dispatch(setEmployee(employee));
          user.id === employee.id && dispatch(setAuthEmployee(employee));
        },
      }));
    }
  }

  const handleDeleteAvatar = () => {
    employee && user && dispatch(deleteEmployeeAvatar({
      employeeId: employee.id,
      onSuccess(employee) {
        dispatch(setEmployee(employee));
        user.id === employee.id && dispatch(setAuthEmployee(employee));
      },
    }))
  };

  return (
    <Dropdown
      dropdownButton={
        <>
          <StyledAvatar
            src={employee?.avatar || '/img/default-avatar.png'}
            alt={employee?.name}
            width={144}
            height={144}
          />
          <Label>Изменить фотографию</Label>
        </>
      }
      dropdownMenu={
        <DropdownMenu>
          <DropdownNavigation>
            <label style={{ cursor: 'pointer' }}>
              Редактировать
              <input
                className="visually-hidden"
                type="file"
                accept="image/*"
                onChange={handleInputChange}
              />
            </label>
          </DropdownNavigation>
          {employee?.avatar &&
            <DropdownNavigation onClick={handleDeleteAvatar}>Удалить</DropdownNavigation>}
        </DropdownMenu>
      }
      menuFullWidth
      menuTop={0}
      onMenuClickHide
    />
  );
}
