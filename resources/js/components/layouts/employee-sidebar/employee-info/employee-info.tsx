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

export default function EmployeeInfo(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData);
  const employee = useAppSelector(getEmployee);

  if (!personalData || !employee) {
    return <></>;
  }

  return (
    <Box>
      <BoxToolbar>
        <LinksWrapper>
          <IconsBox>
            <EnvelopeIcon />
          </IconsBox>
          <TextLink href={`mailto:${personalData.email}`}>{personalData.email}</TextLink>
        </LinksWrapper>

        <LinksWrapper>
          <IconsBox>
            <MobileIcon height={18} />
          </IconsBox>
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
