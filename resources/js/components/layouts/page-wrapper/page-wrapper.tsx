import { LayoutContainer, Wrapper } from './styled';
import PageHeader from '../page-header/page-header';
import { Outlet } from 'react-router-dom';
import PageNavigation from '../page-navigation/page-navigation';

export default function PageWrapper(): JSX.Element {
  return (
    <Wrapper>
      <PageHeader />

      <LayoutContainer>
        <PageNavigation />
        
        <Outlet />
      </LayoutContainer>
    </Wrapper>
  );
}
