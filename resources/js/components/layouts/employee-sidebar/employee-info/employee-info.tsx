import dayjs from 'dayjs';
import { useAppSelector } from '../../../../hooks';
import EnvelopeIcon from '../../../icons/envelope-icon';
import MobileIcon from '../../../icons/mobile-icon';
import DescriptionList from '../../../ui/description-list/description-list';
import IconsBox from '../../../ui/icons-box/icons-box';
import TextLink from '../../../ui/text-link/text-link';
import { LinksWrapper } from './styled';
import { getWorkTime } from '../../../../utils';
import Box from '../../../ui/box/box';
import BoxToolbar from '../../../ui/box-toolbar/box-toolbar';
import BoxInner from '../../../ui/box-inner/box-inner';
import {
  getEmployee,
  getEmployeePersonalData
} from '../../../../store/employees-slice/employees-selector';
import { memo } from 'react';

function EmployeeInfo(): JSX.Element {
  const employee = useAppSelector(getEmployee);
  const personalData = useAppSelector(getEmployeePersonalData);

  if (!personalData || !employee) {
    return <></>;
  };

  return (
    <Box>
      <BoxToolbar>
        <LinksWrapper>
          <IconsBox icon={<EnvelopeIcon width={16} height={16} />} />
          <TextLink href={`mailto:${personalData.email}`}>{personalData.email}</TextLink>
        </LinksWrapper>

        <LinksWrapper>
          <IconsBox icon={<MobileIcon width={16} height={16} />} />
          <TextLink href={`tel:${personalData.tel1}`}>{personalData.tel1}</TextLink>
        </LinksWrapper>
      </BoxToolbar>

      <BoxInner>
        <DescriptionList
          list={{
            'Дата найма': dayjs(employee.startedWorkAt).format('D MMM YYYY'),
            'Срок работы': getWorkTime(employee.startedWorkAt),
          }}
          detailed
        />
      </BoxInner>
    </Box>
  );
};

export default memo(EmployeeInfo);
