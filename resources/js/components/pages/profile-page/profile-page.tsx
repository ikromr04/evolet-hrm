import { Header, HeaderInner, Main } from './styled';
import UserAvatar from './user-avatar/user-avatar';
import UserDetails from './user-details/user-details';
import UserActions from './user-actions/user-actions';

export default function ProfilePage(): JSX.Element {
  return (
    <Main>
      <Header>
        <UserAvatar />

        <HeaderInner>
          <UserDetails/>
          <UserActions />
        </HeaderInner>
      </Header>
    </Main>
  );
}
