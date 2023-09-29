import MainLogo from '../../ui/main-logo/main-logo';
import { Header, HeaderContainer } from './styled';
import EmployeeMenu from './employee-menu/employee-menu';

function PageHeader(): JSX.Element {
  return (
    <Header>
      <HeaderContainer>
        <MainLogo />
        <EmployeeMenu />
      </HeaderContainer>
    </Header>
  );
};

export default PageHeader;
