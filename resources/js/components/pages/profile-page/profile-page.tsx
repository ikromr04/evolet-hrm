import { getUser } from '../../../services/user';
import Avatar from './avatar/avatar';
import { Header, Main, UserDetails, Username } from './styled';
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
        </UserDetails>
      </Header>
    </Main>
  );
}
