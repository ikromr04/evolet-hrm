import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { memo, useEffect } from 'react';
import { getEmployee } from '../../../store/employees-slice/employees-selector';
import Spinner from '../../ui/spinner/spinner';
import EmployeeNavigation from './employee-navigation/employee-navigation';
import { SectionInner, Section } from './styled';
import { fetchEmployeeByIdAction } from '../../../store/employees-slice/employees-api-actions';
import EmployeeHeader from './employee-header/employee-header';

function EmployeeLayout(): JSX.Element {
  const params = useParams();
  const employee = useAppSelector(getEmployee);
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    if (params.employeeId && String(params.employeeId) !== String(employee?.id)) {
      dispatch(fetchEmployeeByIdAction({ employeeId: params.employeeId }));
    }
  }, [location]);

  if (!employee) {
    return (<Spinner />);
  };

  return (
    <Section>
      <EmployeeHeader />

      <EmployeeNavigation employee={employee} />

      <SectionInner>
        <Outlet />
        {/* <EmployeeSidebar /> */}
      </SectionInner>
    </Section>
  );
};

export default memo(EmployeeLayout);
