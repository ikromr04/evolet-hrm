import { BaseSyntheticEvent } from 'react';
import { StyledAvatar, Label} from './styled';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getAuthorizedEmployee, getEmployee } from '../../../../store/employees-slice/employees-selector';
import Dropdown from '../../../ui/dropdown/dropdown';
import DropdownMenu from '../../../ui/dropdown-menu/dropdown-menu';
import DropdownNavigation from '../../../ui/dropdown-navigation/dropdown-navigation';
import { deleteEmployeeAvatarAction, updateEmployeeAvatarAction } from '../../../../store/employees-slice/employees-api-actions';
import { setAuthorizedEmployeeAction, setEmployeeAction } from '../../../../store/employees-slice/employees-slice';

export default function EmployeeAvatar(): JSX.Element {
  const employee = useAppSelector(getEmployee);
  const authorizedEmployee = useAppSelector(getAuthorizedEmployee);
  const dispatch = useAppDispatch();

  const handleInputChange = async (evt: BaseSyntheticEvent) => {
    if (employee && authorizedEmployee) {
      const formData = new FormData();
      formData.append('avatar', evt.target.files[0]);
      dispatch(updateEmployeeAvatarAction({
        formData,
        employeeId: employee.id,
        successHandler(employee) {
          dispatch(setEmployeeAction(employee));
          authorizedEmployee.id === employee.id && dispatch(setAuthorizedEmployeeAction(employee));
        },
      }));
    }
  };

  const handleDeleteAvatar = () => {
    employee && authorizedEmployee && dispatch(deleteEmployeeAvatarAction({
      employeeId: employee.id,
      successHandler(employee) {
        dispatch(setEmployeeAction(employee));
        authorizedEmployee.id === employee.id && dispatch(setAuthorizedEmployeeAction(employee));
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
      onMenuClickHide
    />
  );
};
