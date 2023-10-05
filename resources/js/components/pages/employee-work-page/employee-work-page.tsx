import EmployeeLayout from '../../layouts/employee-layout/employee-layout';
import PageLayout from '../../layouts/page-layout/page-layout';
import PrivateRoute from '../../private-route/private-route';
import { Main } from '../main-page/styled';
import LaborActivity from './labor-activity/labor-activity';

function EmployeeWorkPage(): JSX.Element {
  return (
    <PrivateRoute>
      <PageLayout>
        <EmployeeLayout>
          <Main>
            <LaborActivity />
          </Main>
        </EmployeeLayout>
      </PageLayout>
    </PrivateRoute>
  );
};

export default EmployeeWorkPage;
