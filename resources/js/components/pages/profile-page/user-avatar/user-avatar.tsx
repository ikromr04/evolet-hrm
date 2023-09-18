import { BaseSyntheticEvent, useState } from 'react';
import { StyledAvatar, Label, Wrapper } from './styled';
import { useAppDispatch } from '../../../../hooks';
import { updateAuthAvatar } from '../../../../store/auth-slice/api-actions';
import { getUser } from '../../../../services/user';

export default function UserAvatar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = getUser();
  const [avatar, setAvatar] = useState<string>(user?.avatar || '/img/default-avatar.png');

  const handleInputChange = async (evt: BaseSyntheticEvent) => {
    const formData = new FormData();
    formData.append('avatar', evt.target.files[0]);
    await dispatch(updateAuthAvatar(formData));
    setAvatar(URL.createObjectURL(evt.target.files[0]));
  }

  return (
    <Wrapper>
      <StyledAvatar
        src={avatar}
        alt={user?.name}
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
