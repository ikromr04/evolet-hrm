import dayjs from 'dayjs';
import { useAppSelector } from '../../../../../hooks';
import { getEmployee } from '../../../../../store/employees-slice/employees-selector';
import EditIcon from '../../../../icons/edit-icon';
import BlockToolbar from '../../../../ui/block-toolbar/block-toolbar';
import Block from '../../../../ui/block/block';
import Title from '../../../../ui/title/title';
import { Dd, Dl, Dt, EditButton } from './styled';

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

      <Dl>
        <Dt>ID сотрудника</Dt>
        <Dd>{employee?.id}</Dd>
        <Dt>Имя</Dt>
        <Dd>{employee?.name}</Dd>
        <Dt>Фамилия</Dt>
        <Dd>{employee?.surname}</Dd>
        <Dt>Отчество</Dt>
        <Dd>{employee?.patronymic}</Dd>
        <Dt>Логин</Dt>
        <Dd>{employee?.login}</Dd>
        <Dt>Начало работы</Dt>
        <Dd>{dayjs(employee?.startedWorkAt).format('D MMM YYYY')}</Dd>
        <Dt>Должность</Dt>
        <Dd>{employee?.job}</Dd>
        <Dt>Позиция</Dt>
        <Dd>{employee?.position}</Dd>
      </Dl>
    </Block>
  );
}
