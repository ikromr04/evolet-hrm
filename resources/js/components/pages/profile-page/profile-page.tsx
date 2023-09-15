import { getUser } from '../../../services/user';
import Avatar from './avatar/avatar';
import { Header, Main, Position, UserDetails, Username } from './styled';
import UserInfo from './user-info/user-info';

export default function ProfilePage(): JSX.Element {
  const user = getUser();

  return (
    <Main>
      <Header>
        <Avatar user={user} />
        <UserDetails>
          <Username>{`${user?.surname} ${user?.name}`}</Username>
          <UserInfo />
          <Position>{user?.position}</Position>
        </UserDetails>
      </Header>
    </Main>
  );
}
