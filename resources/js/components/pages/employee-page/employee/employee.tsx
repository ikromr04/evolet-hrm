import dayjs from 'dayjs';
import EditEmployee from './edit-employee/edit-employee';
import { useAppSelector } from '../../../../hooks';
import { getEmployee } from '../../../../store/employees-slice/employees-selector';
import Block from '../../../ui/block/block';
import BlockToolbar from '../../../ui/block-toolbar/block-toolbar';
import Title from '../../../ui/title/title';
import DescriptionList from '../../../ui/description-list/description-list';

export default function Employee(): JSX.Element {
  const employee = useAppSelector(getEmployee);

  if (!employee) {
    return <></>;
  }

  return (
    <Block as="section">
      <BlockToolbar>
        <Title small>Сотрудник</Title>
        <EditEmployee employee={employee} />
      </BlockToolbar>

      <DescriptionList
        list={{
          'ID сотрудника': employee.id,
          'Имя': employee.name,
          'Фамилия': employee.surname,
          'Отчество': employee.patronymic,
          'Логин': employee.login,
          'Начало работы': dayjs(employee.startedWorkAt).format('D MMM YYYY'),
          'Должность': employee.job?.title,
          'Позиция': employee.position?.title,
        }}
      />
    </Block>
  );
}