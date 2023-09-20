import dayjs from 'dayjs';
import { useAppSelector } from '../../../../../hooks';
import { getEmployee } from '../../../../../store/employees-slice/employees-selector';
import EditIcon from '../../../../icons/edit-icon';
import BlockToolbar from '../../../../ui/block-toolbar/block-toolbar';
import Block from '../../../../ui/block/block';
import Title from '../../../../ui/title/title';
import { EditButton } from './styled';
import DescriptionList from '../../../../ui/description-list/description-list';

export default function Employee(): JSX.Element {
  const employee = useAppSelector(getEmployee);

  return (
    <Block as="section">
      <BlockToolbar>
        <Title small>Сотрудник</Title>

        <EditButton type="button">
          <EditIcon height={13} /> Редактировать
        </EditButton>
      </BlockToolbar>

      <DescriptionList
        list={{
          'ID сотрудника': employee?.id,
          'Имя': employee?.name,
          'Фамилия': employee?.surname,
          'Отчество': employee?.patronymic,
          'Логин': employee?.login,
          'Начало работы': dayjs(employee?.startedWorkAt).format('D MMM YYYY'),
          'Должность': employee?.job,
          'Позиция': employee?.position,
        }}
      />
    </Block>
  );
}
