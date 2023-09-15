import { getUser } from '../../../services/user';
import Title from '../../ui/title/title';
import Avatar from './avatar/avatar';
import { Header, HeaderInner, Job, Main } from './styled';

export default function ProfilePage(): JSX.Element {
  const user = getUser();

  return (
    <Main>
      <Header>
        <Avatar user={user} />
        <HeaderInner>
          <Title>{`${user?.surname} ${user?.name}`}</Title>
          <Job></Job>
        </HeaderInner>
      </Header>
    </Main>
  );
}
