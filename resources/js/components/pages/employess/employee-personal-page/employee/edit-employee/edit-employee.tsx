import { Employee } from '../../../../../../types/employees';
import EditIcon from '../../../../../icons/edit-icon';
import Button from '../../../../../ui/button/button';
import { EditModal } from './styled';

type EditEmployeeProps = {
  employee: Employee
};

export default function EditEmployee({ employee }: EditEmployeeProps): JSX.Element {
  const { name } = employee;

  return (
    <EditModal
      modalButton={
        <Button type="button">
          <EditIcon height={13} /> Редактировать
        </Button>
      }
      modalWindow={<>modal</>}
    />
  );
}
