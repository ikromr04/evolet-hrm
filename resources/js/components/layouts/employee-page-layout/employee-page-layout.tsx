import { Outlet, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { useEffect } from 'react';
import { getEmployee } from '../../../store/employees-slice/employees-selector';
import { fetchEmployeeById } from '../../../store/employees-slice/employees-api-actions';
import { LayoutHeader, PageWrapper, StyledLayout } from './styled';
import EmployeeAvatar from './employee-avatar/employee-avatar';
import EmployeeDetails from './employee-details/employee-details';
import Spinner from '../../ui/spinner/spinner';
import EmployeeNavigation from './employee-navigation/employee-navigation';
import EmployeeSidebar from '../employee-sidebar/employee-sidebar';

export default function EmployeePageLayout(): JSX.Element {
  const params = useParams();
  const employee = useAppSelector(getEmployee);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!employee && params.employeeId) {
      dispatch(fetchEmployeeById({ employeeId: params.employeeId }));
    }
  }, [dispatch]);

  if (!employee) {
    return (<Spinner />);
  }

  return (
    <StyledLayout>
      <LayoutHeader>
        <EmployeeAvatar />

        <EmployeeDetails employee={employee} />
      </LayoutHeader>

      <EmployeeNavigation employee={employee} />

      <PageWrapper>
        <Outlet />
        <EmployeeSidebar />
      </PageWrapper>
    </StyledLayout>
  );
};
