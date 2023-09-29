import { Layout, LayoutContainer } from './styled';
import PageHeader from '../page-header/page-header';
import { Outlet } from 'react-router-dom';
import PageNavigation from '../page-navigation/page-navigation';

function PageLayout(): JSX.Element {
  return (
    <Layout>
      <PageHeader />

      <LayoutContainer>
        <PageNavigation />
        <Outlet />
      </LayoutContainer>
    </Layout>
  );
};

export default PageLayout;
