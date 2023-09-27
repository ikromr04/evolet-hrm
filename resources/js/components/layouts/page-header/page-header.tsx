import MainLogo from '../../ui/main-logo/main-logo';
import { Header, HeaderContainer } from './styled';
import Notification from './notification/notification';
import GlobalSearch from './global-search/global-search';
import QuickAdd from './quick-add/quick-add';
import UserNavigation from './user-navigation/user-navigation';

export default function PageHeader(): JSX.Element {
  return (
    <Header>
      <HeaderContainer>
        <MainLogo />
        <GlobalSearch />

        <QuickAdd />
        <Notification />
        <UserNavigation />
      </HeaderContainer>
    </Header>
  );
};
