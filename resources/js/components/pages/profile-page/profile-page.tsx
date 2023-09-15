import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getUser } from '../../../services/user';
import { getAuthJob } from '../../../store/auth-slice/selector';
import Avatar from './avatar/avatar';
import { Header, HeaderInner, Details, Main, Username, DetailsItem } from './styled';
import { fetchAuthJob } from '../../../store/auth-slice/api-actions';
import BriefcaseIcon from '../../icons/briefcase-icon';

export default function ProfilePage(): JSX.Element {
  const user = getUser();
  const job = useAppSelector(getAuthJob);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!job) {
      dispatch(fetchAuthJob());
    }
  }, []);

  return (
    <Main>
      <Header>
        <Avatar user={user} />
        <HeaderInner>
          <Username>{`${user?.surname} ${user?.name}`}</Username>
          {job &&
            <Details>
              <DetailsItem>
                <BriefcaseIcon width={16} height={16} />
                {job.title}
              </DetailsItem>
            </Details>}
        </HeaderInner>
      </Header>
    </Main>
  );
}
