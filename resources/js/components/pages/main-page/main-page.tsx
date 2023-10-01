import { DEFAULT_AVATAR_PATH } from '../../../const';
import { useAppSelector } from '../../../hooks';
import {
  getAuthorizedEmployee,
  getAuthorizedEmployeeAvatar
} from '../../../store/employees-slice/employees-selector';
import PageLayout from '../../layouts/page-layout/page-layout';
import PrivateRoute from '../../private-route/private-route';
import Title from '../../ui/title/title';
import { Avatar, Header, Main } from './styled';

function MainPage(): JSX.Element {
  const employee = useAppSelector(getAuthorizedEmployee);
  const avatar = useAppSelector(getAuthorizedEmployeeAvatar);

  return (
    <PrivateRoute>
      <PageLayout>
        <Main>
          <Header>
            <Avatar
              src={avatar || DEFAULT_AVATAR_PATH}
              width={40}
              height={40}
              alt={employee?.name}
            />
            <Title>{`Добро пожаловать, ${employee?.name}`}</Title>
          </Header>
        </Main>
      </PageLayout>
    </PrivateRoute>
  );
};

export default MainPage;
