import EmployeeInfo from './employee-info/employee-info';
import EmployeeLanguages from './employee-languages/employee-languages';
import { StyledSidebar } from './styled';

export default function EmployeeSidebar(): JSX.Element {
  return (
    <StyledSidebar>
      <EmployeeInfo />
      <EmployeeLanguages />
    </StyledSidebar>
  );
};
