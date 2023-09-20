import Employee from './employee/employee';
import { LeftWrapper, RightWrapper, StyledPage } from './styled';

export default function EmployeePersonalPage(): JSX.Element {
  return (
    <StyledPage>
      <LeftWrapper>
        <Employee />
      </LeftWrapper>

      <RightWrapper>
        RightWrapper
      </RightWrapper>
    </StyledPage>
  );
}
