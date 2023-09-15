import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getAuthJob, getAuthPersonalData } from '../../../../store/auth-slice/selector';
import BriefcaseIcon from '../../../icons/briefcase-icon';
import { Info, Item } from './styled';
import { fetchAuthJob, fetchAuthPersonalData } from '../../../../store/auth-slice/api-actions';
import LocationIcon from '../../../icons/location-icon';

export default function UserInfo(): JSX.Element {
  const job = useAppSelector(getAuthJob);
  const personalData = useAppSelector(getAuthPersonalData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    !job && dispatch(fetchAuthJob());
    !personalData && dispatch(fetchAuthPersonalData());
  }, [job, dispatch, personalData]);

  if (!job && !personalData) {
    return <></>;
  }

  return (
    <Info>
      {job &&
        <Item>
          <BriefcaseIcon width={16} height={16} />
          {job.title}
        </Item>}
      {personalData &&
        <Item>
          <LocationIcon width={16} height={16} />
          {personalData.address}
        </Item>}
    </Info>
  );
}
