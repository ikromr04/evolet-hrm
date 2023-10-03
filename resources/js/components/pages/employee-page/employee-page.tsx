import EmployeeLayout from '../../layouts/employee-layout/employee-layout';
import PageLayout from '../../layouts/page-layout/page-layout';
import PrivateRoute from '../../private-route/private-route';
import Education from './education/education';
import Employee from './employee/employee';
import PersonalData from './personal-data/personal-data';
import { Main } from './styled';

function EmployeePage(): JSX.Element {
  return (
    <PrivateRoute>
      <PageLayout>
        <EmployeeLayout>
          <Main>
            <Employee />
            {/* <PersonalData /> */}
            {/* <Education /> */}
          </Main>
        </EmployeeLayout>
      </PageLayout>
    </PrivateRoute>
  );
};

export default EmployeePage;
