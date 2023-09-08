import { AppRoute } from '../../../const';
import Account from '../../account/account';
import QuickAdd from '../../quick-add/quick-add';
import MainLogo from '../../ui/main-logo/main-logo';
import { Header, HeaderContainer, Search } from './styled';
import Notification from '../../notification/notification';

export default function PageHeader(): JSX.Element {
  return (
    <Header>
      <HeaderContainer>
        <MainLogo href={AppRoute.Main} />
        <Search />

        <QuickAdd />
        <Notification />
        <Account />
      </HeaderContainer>
    </Header>
  );
}
