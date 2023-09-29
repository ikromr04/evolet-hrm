import dayjs from 'dayjs';
import EditEmployee from './edit-employee/edit-employee';
import { useAppSelector } from '../../../../hooks';
import { getEmployee } from '../../../../store/employees-slice/employees-selector';
import Title from '../../../ui/title/title';
import DescriptionList from '../../../ui/description-list/description-list';
import Box from '../../../ui/box/box';
import BoxToolbar from '../../../ui/box-toolbar/box-toolbar';
import BoxInner from '../../../ui/box-inner/box-inner';

export default function Employee(): JSX.Element {
  const employee = useAppSelector(getEmployee);

  if (!employee) {
    return <></>;
  };

  return (
    <Box tagName="section">
      <BoxToolbar>
        <Title small>Сотрудник</Title>
        <EditEmployee employee={employee} />
      </BoxToolbar>

      <BoxInner>
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
      </BoxInner>
    </Box>
  );
};
