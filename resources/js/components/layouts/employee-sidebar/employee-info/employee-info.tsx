import dayjs from 'dayjs';
import { useAppSelector } from '../../../../hooks';
import { getEmployee, getEmployeePersonalData } from '../../../../store/employees-slice/employees-selector';
import EnvelopeIcon from '../../../icons/envelope-icon';
import MobileIcon from '../../../icons/mobile-icon';
import BlockToolbar from '../../../ui/block-toolbar/block-toolbar';
import DescriptionList from '../../../ui/description-list/description-list';
import IconsBox from '../../../ui/icons-box/icons-box';
import TextLink from '../../../ui/text-link/text-link';
import { LinksWrapper } from './styled';
import { getWorkTime } from '../../../../utils';
import Box from '../../../ui/box/box';

export default function EmployeeInfo(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData);
  const employee = useAppSelector(getEmployee);

  if (!personalData || !employee) {
    return <></>;
  }

  return (
    <Box>
      <BlockToolbar>
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
      </BlockToolbar>

      <DescriptionList
        list={{
          'Дата найма': dayjs(employee.startedWorkAt).format('D MMM YYYY'),
          'Срок работы': getWorkTime(employee.startedWorkAt),
        }}
        detailed
      />
    </Box>
  );
};
