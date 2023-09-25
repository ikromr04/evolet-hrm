import EmployeeInfo from './employee-info/employee-info';
import { StyledSidebar } from './styled';

export default function EmployeeSidebar(): JSX.Element {
  return (
    <StyledSidebar>
      <EmployeeInfo />
    </StyledSidebar>
  );
};
