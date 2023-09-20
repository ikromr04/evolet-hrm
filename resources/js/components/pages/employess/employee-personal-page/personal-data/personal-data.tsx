import { useAppSelector } from '../../../../../hooks';
import { getEmployeePersonalData } from '../../../../../store/employees-slice/employees-selector';
import EditIcon from '../../../../icons/edit-icon';
import BlockToolbar from '../../../../ui/block-toolbar/block-toolbar';
import Block from '../../../../ui/block/block';
import DescriptionList from '../../../../ui/description-list/description-list';
import Spinner from '../../../../ui/spinner/spinner';
import TextLink from '../../../../ui/text-link/text-link';
import Title from '../../../../ui/title/title';
import { EditButton } from './styled';
import dayjs from 'dayjs';

export default function PersonalData(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData);

  return (
    <Block as="section">
      <BlockToolbar>
        <Title small>Персональные данные</Title>

        <EditButton type="button">
          <EditIcon height={13} /> Редактировать
        </EditButton>
      </BlockToolbar>

      {personalData
        ?
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
        :
          <Spinner width={24} stroke={4} style={{ margin: '16px' }} />}
    </Block>
  );
}
