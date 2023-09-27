import { Layout, LayoutContainer } from './styled';
import PageHeader from '../page-header/page-header';
import { Outlet } from 'react-router-dom';
import PageNavigation from '../page-navigation/page-navigation';

export default function PagesLayout(): JSX.Element {
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
