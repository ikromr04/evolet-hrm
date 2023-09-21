import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { Details, Info, InfoItem, Name, Position } from './styled';
import BriefcaseIcon from '../../../../icons/briefcase-icon';
import LocationIcon from '../../../../icons/location-icon';
import { Employee } from '../../../../../types/employees';
import { getEmployeePersonalData } from '../../../../../store/employees-slice/employees-selector';
import { fetchEmployeePersonalData } from '../../../../../store/employees-slice/employees-api-actions';

type EmployeeDetailsProps = {
  employee: Employee;
}

export default function EmployeeDetails({ employee }: EmployeeDetailsProps): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    personalData?.userId !== employee.id &&
      dispatch(fetchEmployeePersonalData({ employeeId: employee.id }));
  }, [ dispatch, personalData, employee ]);

  return (
    <Details>
      <Name>{`${employee.surname} ${employee.name}`}</Name>
      {(employee.job || personalData) &&
        <Info>
          {employee.job &&
            <InfoItem>
              <BriefcaseIcon width={16} height={16} />
              {employee.job?.title}
            </InfoItem>}
          {personalData?.address &&
            <InfoItem>
              <LocationIcon width={16} height={16} />
              {personalData.address}
            </InfoItem>}
        </Info>}
      {employee.position && <Position>{employee.position?.title}</Position>}
    </Details>
  );
}
