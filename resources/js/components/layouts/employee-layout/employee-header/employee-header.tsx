import { memo } from 'react';
import { HeaderInner, Job, Name, Position, StyledHeader } from './styled';
import EmployeeAvatar from './employee-avatar/employee-avatar';
import BriefcaseIcon from '../../../icons/briefcase-icon';
import { useAppSelector } from '../../../../hooks';
import { getEmployee } from '../../../../store/employees-slice/employees-selector';
import Buttons from '../../../ui/buttons/buttons';
import Button from '../../../ui/button/button';
import ChevronLeftIcon from '../../../icons/chevron-left-icon';
import ChevronRightIcon from '../../../icons/chevron-right-icon';
import { generatePath } from 'react-router-dom';
import { AppRoute } from '../../../../const';

function EmployeeHeader(): JSX.Element {
  const employee = useAppSelector(getEmployee);

  if (!employee) {
    return <></>;
  }

  return (
    <StyledHeader>
      <EmployeeAvatar />

      <HeaderInner>
        <div>
          <Name>{`${employee.surname} ${employee.name}`}</Name>
          {employee.job &&
            <Job>
              <BriefcaseIcon width={16} height={16} /> {employee.job.title}
            </Job>}
          <Position>{employee.position?.title}</Position>
        </div>

        <Buttons>
          <Button href={generatePath(AppRoute.Employee, { employeeId: employee.previousEmployeeId })}>
            <ChevronLeftIcon width={16} height={16} /> Предыдущий
          </Button>
          <Button href={generatePath(AppRoute.Employee, { employeeId: employee.nextEmployeeId })}>
            Следующий <ChevronRightIcon width={16} height={16} />
          </Button>
        </Buttons>
      </HeaderInner>
    </StyledHeader>
  );
};

export default memo(EmployeeHeader);
