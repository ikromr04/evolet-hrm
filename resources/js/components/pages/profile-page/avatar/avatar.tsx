import { BaseSyntheticEvent, useRef, useState } from 'react';
import { User } from '../../../../types/user';
import { StyledAvatar, Label, Wrapper } from './styled';
import { useAppDispatch } from '../../../../hooks';
import { updateAuthAvatar } from '../../../../store/auth-slice/api-actions';

type AvatarProps = {
  user: User | null;
}

export default function Avatar({ user }: AvatarProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [avatar, setAvatar] = useState<string>(user?.avatar || '');

  const handleInputChange = async (evt: BaseSyntheticEvent) => {
    const formData = new FormData();
    formData.append('avatar', evt.target.files[0], 'chris.jpg');
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
