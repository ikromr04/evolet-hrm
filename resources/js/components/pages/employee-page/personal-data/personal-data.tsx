import { useAppSelector } from '../../../../hooks';
import { getEmployeePersonalData } from '../../../../store/employees-slice/employees-selector';
import BoxInner from '../../../ui/box-inner/box-inner';
import BoxToolbar from '../../../ui/box-toolbar/box-toolbar';
import Box from '../../../ui/box/box';
import DescriptionList from '../../../ui/description-list/description-list';
import TextLink from '../../../ui/text-link/text-link';
import Title from '../../../ui/title/title';
import EditPersonalData from './edit-personal-data/edit-personal-data';
import dayjs from 'dayjs';

export default function PersonalData(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData);

  if (!personalData) {
    return <></>;
  };

  return (
    <Box tagName="section">
      <BoxToolbar>
        <Title small>Персональные данные</Title>
        <EditPersonalData personalData={personalData} />
      </BoxToolbar>

      <BoxInner>
        <DescriptionList
          list={{
            'Дата рождения': dayjs(personalData.birthDate).format('D MMM YYYY'),
            'Пол': personalData.gender,
            'Национальность': personalData.nationality,
            'Гражданство': personalData.citizenship,
            'Адрес': personalData.address,
            'Эл. почта': <TextLink href={`mailto:${personalData.email}`}>{personalData.email}</TextLink>,
            'Телефон-1': <TextLink href={`tel:${personalData.tel1}`}>{personalData.tel1}</TextLink>,
            'Телефон-2': <TextLink href={`tel:${personalData.tel2}`}>{personalData.tel2}</TextLink>,
            'Семейное положение': personalData.familyStatus,
            'Дети': personalData.children,
          }}
        />
      </BoxInner>
    </Box>
  );
};
