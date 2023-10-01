import { memo, useEffect } from 'react';
import EmployeeInfo from './employee-info/employee-info';
import { StyledSidebar } from './styled';
import { useAppDispatch } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { fetchEmployeePersonalDataAction } from '../../../store/employees-slice/employees-api-actions';

function EmployeeSidebar(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    if (params?.employeeId) {
      dispatch(fetchEmployeePersonalDataAction({ employeeId: params.employeeId }));
    }
  }, [params?.employeeId]);

  return (
    <StyledSidebar>
      <EmployeeInfo />
      {/* <EmployeeLanguages /> */}
    </StyledSidebar>
  );
};

export default memo(EmployeeSidebar);
