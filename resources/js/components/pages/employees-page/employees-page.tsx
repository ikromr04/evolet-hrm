import PageLayout from '../../layouts/page-layout/page-layout';
import PrivateRoute from '../../private-route/private-route';
import Title from '../../ui/title/title';
import Employees from './employees/employee';
import { Main } from './styled';

function EmployeesPage(): JSX.Element {
  return (
    <PrivateRoute>
      <PageLayout>
        <Main>
          <Title tagName="h1">Справочник сотрудников</Title>
          <Employees />
        </Main>
      </PageLayout>
    </PrivateRoute>
  );
};

export default EmployeesPage;
