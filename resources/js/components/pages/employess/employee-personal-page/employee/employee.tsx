import dayjs from 'dayjs';
import { useAppSelector } from '../../../../../hooks';
import { getEmployee } from '../../../../../store/employees-slice/employees-selector';
import BlockToolbar from '../../../../ui/block-toolbar/block-toolbar';
import Block from '../../../../ui/block/block';
import Title from '../../../../ui/title/title';
import DescriptionList from '../../../../ui/description-list/description-list';
import Spinner from '../../../../ui/spinner/spinner';
import EditEmployee from './edit-employee/edit-employee';

export default function Employee(): JSX.Element {
  const employee = useAppSelector(getEmployee);

  return (
    <Block as="section">
      <BlockToolbar>
        <Title small>Сотрудник</Title>
        {employee && <EditEmployee employee={employee} />}
      </BlockToolbar>

      {employee
        ?
          <DescriptionList
            list={{
              'ID сотрудника': employee.id,
              'Имя': employee.name,
              'Фамилия': employee.surname,
              'Отчество': employee.patronymic,
              'Логин': employee.login,
              'Начало работы': dayjs(employee.startedWorkAt).format('D MMM YYYY'),
              'Должность': employee.job,
              'Позиция': employee.position,
            }}
          />
        :
          <Spinner width={24} stroke={4} style={{ margin: '16px' }} />}
    </Block>
  );
}
