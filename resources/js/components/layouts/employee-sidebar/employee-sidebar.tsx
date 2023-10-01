import { memo, useEffect } from 'react';
import EmployeeInfo from './employee-info/employee-info';
import { StyledSidebar } from './styled';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { fetchEmployeePersonalDataAction } from '../../../store/employees-slice/employees-api-actions';
import EmployeeLanguages from './employee-languages/employee-languages';
import { getEmployee, getEmployeePersonalData } from '../../../store/employees-slice/employees-selector';

function EmployeeSidebar(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const personalData = useAppSelector(getEmployeePersonalData);
  const employee = useAppSelector(getEmployee);

  useEffect(() => {
    if ((params.employeeId && params.employeeId !== String(employee?.id))
      || (!personalData && params.employeeId)) {
      dispatch(fetchEmployeePersonalDataAction({ employeeId: params.employeeId }));
    }
  }, [params.employeeId]);

  return (
    <StyledSidebar>
      <EmployeeInfo />
      <EmployeeLanguages />
    </StyledSidebar>
  );
};

export default memo(EmployeeSidebar);
