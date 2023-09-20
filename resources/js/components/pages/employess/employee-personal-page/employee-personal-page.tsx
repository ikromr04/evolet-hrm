import Employee from './employee/employee';
import PersonalData from './personal-data/personal-data';
import { StyledPage } from './styled';

export default function EmployeePersonalPage(): JSX.Element {
  return (
    <StyledPage>
      <Employee />
      <PersonalData />
    </StyledPage>
  );
}
