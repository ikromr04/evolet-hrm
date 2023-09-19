import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { getUser } from '../../../../../services/user';
import { getAuthPersonalData } from '../../../../../store/employees-slice/employees-selector';
import { fetchAuthPersonalData } from '../../../../../store/employees-slice/employees-api-actions';
import { Details, Info, InfoItem, Position, Username } from './styled';
import BriefcaseIcon from '../../../../icons/briefcase-icon';
import LocationIcon from '../../../../icons/location-icon';

export default function EmployeeDetails(): JSX.Element {
  const user = getUser();
  const personalData = useAppSelector(getAuthPersonalData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    !personalData && dispatch(fetchAuthPersonalData());
  }, [ dispatch, personalData]);

  return (
    <Details>
      <Username>{`${user?.surname} ${user?.name}`}</Username>
      {(user?.job && personalData) &&
        <Info>
          {user?.job &&
            <InfoItem>
              <BriefcaseIcon width={16} height={16} />
              {user?.job}
            </InfoItem>}
          {personalData &&
            <InfoItem>
              <LocationIcon width={16} height={16} />
              {personalData.address}
            </InfoItem>}
        </Info>}
      <Position>{user?.position}</Position>
    </Details>
  );
}
