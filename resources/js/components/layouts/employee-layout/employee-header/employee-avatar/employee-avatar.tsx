import { BaseSyntheticEvent, memo } from 'react';
import { Avatar, StyledDropdown } from './styled';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import {
  getEmployee,
  getEmployeeAvatar
} from '../../../../../store/employees-slice/employees-selector';
import {
  deleteEmployeeAvatarAction,
  updateEmployeeAvatarAction
} from '../../../../../store/employees-slice/employees-api-actions';
import DropdownMenuItem from '../../../../ui/dropdown-navigation/dropdown-navigation';
import Info from '../../../../ui/info/info';
import { setEmployeeAvatarAction } from '../../../../../store/employees-slice/employees-slice';
import { DEFAULT_AVATAR_PATH } from '../../../../../const';

function EmployeeAvatar(): JSX.Element {
  const employee = useAppSelector(getEmployee);
  const avatar = useAppSelector(getEmployeeAvatar);
  const dispatch = useAppDispatch();

  if (!employee) {
    return <></>;
  }

  const handleInputChange = async (evt: BaseSyntheticEvent) => {
      const formData = new FormData();
      formData.append('avatar', evt.target.files[0]);
      dispatch(updateEmployeeAvatarAction({
        formData,
        employeeId: employee.id,
        successHandler(avatarPath) {
          dispatch(setEmployeeAvatarAction(avatarPath));
        },
      }));
  };

  const handleDeleteAvatar = () => {
    dispatch(deleteEmployeeAvatarAction({
      employeeId: employee.id,
      successHandler() {
        dispatch(setEmployeeAvatarAction(null));
      },
    }))
  };

  return (
    <StyledDropdown
      button={
        <>
          <Avatar
            src={avatar || DEFAULT_AVATAR_PATH}
            alt={employee?.name}
            width={144}
            height={144}
          />
          <Info top>Изменить фотографию</Info>
        </>
      }
      menu={
        <>
          <DropdownMenuItem>
            <label style={{ cursor: 'pointer' }}>
              Редактировать
              <input
                className="visually-hidden"
                type="file"
                accept="image/*"
                onChange={handleInputChange}
              />
            </label>
          </DropdownMenuItem>
          {avatar && <DropdownMenuItem onClick={handleDeleteAvatar}>Удалить</DropdownMenuItem>}
        </>
      }
      fullWidthMenu
    />
  );
};

export default memo(EmployeeAvatar);
