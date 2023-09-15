import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getAuthPersonalData } from '../../../../store/auth-slice/selector';
import BriefcaseIcon from '../../../icons/briefcase-icon';
import { Info, Item } from './styled';
import { fetchAuthPersonalData } from '../../../../store/auth-slice/api-actions';
import LocationIcon from '../../../icons/location-icon';
import { getUser } from '../../../../services/user';

export default function UserInfo(): JSX.Element {
  const user = getUser();
  const personalData = useAppSelector(getAuthPersonalData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    !personalData && dispatch(fetchAuthPersonalData());
  }, [ dispatch, personalData]);

  if (!user?.job && !personalData) {
    return <></>;
  }

  return (
    <Info>
      {user?.job &&
        <Item>
          <BriefcaseIcon width={16} height={16} />
          {user?.job}
        </Item>}
      {personalData &&
        <Item>
          <LocationIcon width={16} height={16} />
          {personalData.address}
        </Item>}
    </Info>
  );
}
