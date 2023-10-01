import EmployeeLayout from '../../layouts/employee-layout/employee-layout';
import PageLayout from '../../layouts/page-layout/page-layout';
import PrivateRoute from '../../private-route/private-route';
import Title from '../../ui/title/title';
import { Main } from '../main-page/styled';

function EmployeeWorkPage(): JSX.Element {
  return (
    <PrivateRoute>
      <PageLayout>
        <EmployeeLayout>
          <Main>
            <Title tagName="h1">Трудовая деятельность</Title>
          </Main>
        </EmployeeLayout>
      </PageLayout>
    </PrivateRoute>
  );
};

export default EmployeeWorkPage;
