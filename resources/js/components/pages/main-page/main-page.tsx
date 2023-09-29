import { useAppSelector } from '../../../hooks';
import { getAuthorizedEmployee } from '../../../store/employees-slice/employees-selector';
import Title from '../../ui/title/title';
import { Avatar, Header, Main } from './styled';

export default function MainPage(): JSX.Element {
  const user = useAppSelector(getAuthorizedEmployee);

  return (
    <Main>
      <Header>
        <Avatar
          src={user?.avatar || '/img/default-avatar.png'}
          width={40}
          height={40}
          alt={user?.name}
        />
        <Title>{`Добро пожаловать, ${user?.name}`}</Title>
      </Header>
    </Main>
  );
};
