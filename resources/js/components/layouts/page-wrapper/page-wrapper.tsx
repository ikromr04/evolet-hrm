import { Wrapper } from './styled';
import PageHeader from '../page-header/page-header';
import { Outlet } from 'react-router-dom';

export default function PageWrapper(): JSX.Element {
  return (
    <Wrapper>
      <PageHeader />
      <Outlet />
    </Wrapper>
  );
}
