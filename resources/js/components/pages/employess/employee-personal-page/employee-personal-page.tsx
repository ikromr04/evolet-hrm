import Employee from './employee/employee';
import PersonalData from './personal-data/personal-data';
import { LeftWrapper, RightWrapper, StyledPage } from './styled';

export default function EmployeePersonalPage(): JSX.Element {
  return (
    <StyledPage>
      <LeftWrapper>
        <Employee />
        <PersonalData />
      </LeftWrapper>

      <RightWrapper>
        RightWrapper
      </RightWrapper>
    </StyledPage>
  );
}
