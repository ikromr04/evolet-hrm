import { Outlet } from 'react-router-dom';
import ProfileNavigation from './profile-navigation/profile-navigation';
import { Header, HeaderInner, Main } from './styled';
import UserAvatar from './user-avatar/user-avatar';
import UserDetails from './user-details/user-details';
// import UserActions from './user-actions/user-actions';

export default function ProfilePage(): JSX.Element {
  return (
    <Main>
      <Header>
        <UserAvatar />

        <HeaderInner>
          <UserDetails/>
          {/* <UserActions /> */}
        </HeaderInner>
      </Header>

      <ProfileNavigation />

      <Outlet />
    </Main>
  );
}
