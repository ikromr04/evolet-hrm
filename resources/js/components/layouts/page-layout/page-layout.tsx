import { LayoutContainer } from './styled';
import PageHeader from '../page-header/page-header';
import { Outlet } from 'react-router-dom';
import PageNavigation from '../page-navigation/page-navigation';

function PageLayout(): JSX.Element {
  return (
    <>
      <PageHeader />

      <LayoutContainer>
        <PageNavigation />
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default PageLayout;
