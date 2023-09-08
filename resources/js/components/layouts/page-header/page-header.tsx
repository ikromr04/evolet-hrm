import { AppRoute } from '../../../const';
import QuickAdd from '../../quick-add/quick-add';
import MainLogo from '../../ui/main-logo/main-logo';
import { Header, HeaderContainer, Search } from './styled';
import Notification from '../../notification/notification';
import UserNavigation from '../../user-navigation/user-navigation';

export default function PageHeader(): JSX.Element {
  return (
    <Header>
      <HeaderContainer>
        <MainLogo href={AppRoute.Main} />
        <Search />

        <QuickAdd />
        <Notification />
        <UserNavigation />
      </HeaderContainer>
    </Header>
  );
}
