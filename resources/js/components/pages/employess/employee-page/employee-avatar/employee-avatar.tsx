import { BaseSyntheticEvent } from 'react';
import { StyledAvatar, Label, Wrapper } from './styled';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { updateEmployeeAvatar } from '../../../../../store/employees-slice/employees-api-actions';
import { getEmployee } from '../../../../../store/employees-slice/employees-selector';

export default function EmployeeAvatar(): JSX.Element {
  const employee = useAppSelector(getEmployee);
  const dispatch = useAppDispatch();

  const handleInputChange = async (evt: BaseSyntheticEvent) => {
    const formData = new FormData();
    formData.append('avatar', evt.target.files[0]);
    await dispatch(updateEmployeeAvatar(formData));
    // setAvatar(URL.createObjectURL(evt.target.files[0]));
  }

  return (
    <Wrapper>
      <StyledAvatar
        src={employee?.avatar || '/img/default-avatar.png'}
        alt={employee?.name}
        width={144}
        height={144}
      />
      <Label>Изменить фотографию</Label>
      <input
        className="visually-hidden"
        type="file"
        accept="image/*"
        onChange={handleInputChange}
      />
    </Wrapper>
  );
}
