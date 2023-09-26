import { useEffect } from 'react';
import { Details, Info, InfoItem, InfoItemText, Name, Position } from './styled';
import { Employee } from '../../../../types/employees';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { fetchEmployeePersonalData } from '../../../../store/employees-slice/employees-api-actions';
import { getEmployeePersonalData } from '../../../../store/employees-slice/employees-selector';
import BriefcaseIcon from '../../../icons/briefcase-icon';
import LocationIcon from '../../../icons/location-icon';

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
              <InfoItemText>{employee.job?.title}</InfoItemText>
            </InfoItem>}
          {personalData?.address &&
            <InfoItem>
              <LocationIcon width={16} height={16} />
              <InfoItemText>{personalData.address}</InfoItemText>
            </InfoItem>}
        </Info>}
      {employee.position && <Position>{employee.position?.title}</Position>}
    </Details>
  );
}
