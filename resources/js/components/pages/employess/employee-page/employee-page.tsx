import { Outlet, useParams } from 'react-router-dom';
import { Header, HeaderInner, Main } from './styled';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { fetchEmployeeById } from '../../../../store/employees-slice/employees-api-actions';
import { getEmployee } from '../../../../store/employees-slice/employees-selector';
import EmployeeAvatar from './employee-avatar/employee-avatar';
import EmployeeDetails from './employee-details/employee-details';
import EmployeeNavigation from './employee-navigation/employee-navigation';

export default function EmployeePage(): JSX.Element {
  const params = useParams();
  const employee = useAppSelector(getEmployee);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!employee && params.employeeId) {
      dispatch(fetchEmployeeById({ employeeId: params.employeeId }));
    }
  }, [dispatch]);

  return (
    <Main>
      <Header>
        <EmployeeAvatar />

        <HeaderInner>
          {employee && <EmployeeDetails employee={employee} />}
        </HeaderInner>
      </Header>

      {employee && <EmployeeNavigation employee={employee} />}
      <Outlet />
    </Main>
  );
}
