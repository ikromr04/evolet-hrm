import { getUser } from '../../../services/user';
import Actions from './actions/actions';
import Avatar from './avatar/avatar';
import { Header, HeaderInner, Main, Position, UserDetails, Username } from './styled';
import UserInfo from './user-info/user-info';

export default function ProfilePage(): JSX.Element {
  const user = getUser();

  return (
    <Main>
      <Header>
        <Avatar user={user} />

        <HeaderInner>
          <UserDetails>
            <Username>{`${user?.surname} ${user?.name}`}</Username>
            <UserInfo />
            <Position>{user?.position}</Position>
          </UserDetails>
          
          <Actions />
        </HeaderInner>
      </Header>
    </Main>
  );
}
