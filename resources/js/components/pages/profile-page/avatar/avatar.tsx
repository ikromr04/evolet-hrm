import { User } from '../../../../types/user';
import { StyledAvatar, Wrapper } from './styled';

type AvatarProps = {
  user: User | null;
}

export default function Avatar({ user }: AvatarProps): JSX.Element {
  return (
    <Wrapper>
      <StyledAvatar
        src={user?.avatar}
        alt={user?.name}
        width={144}
        height={144}
      />
    </Wrapper>
  );
}
