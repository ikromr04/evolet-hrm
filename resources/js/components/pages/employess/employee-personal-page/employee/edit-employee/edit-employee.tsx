import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { Employee } from '../../../../../../types/employees';
import EditIcon from '../../../../../icons/edit-icon';
import Button from '../../../../../ui/button/button';
import TextField from '../../../../../ui/text-field/text-field';
import { EditForm, EditModal, SubmitButton } from './styled';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks';
import { updateEmployeeAction } from '../../../../../../store/employees-slice/employees-api-actions';
import { ValidationError } from '../../../../../../types/validation-error';
import { toast } from 'react-toastify';
import { redirectToRoute } from '../../../../../../store/middlewares/redirect';
import { AppRoute } from '../../../../../../const';
import { generatePath } from 'react-router-dom';
import { getJobs } from '../../../../../../store/job-slice/job-selector';
import { fetchJobs } from '../../../../../../store/job-slice/job-api-actions';
import { getPositions } from '../../../../../../store/position-slice/position-selector';
import { fetchPositions } from '../../../../../../store/position-slice/position-api-actions';

type EditEmployeeProps = {
  employee: Employee
};

export default function EditEmployee({ employee }: EditEmployeeProps): JSX.Element {
  const { id, name, surname, patronymic, login, startedWorkAt, job, position } = employee;
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState<ValidationError | null>(null);
  const dispatch = useAppDispatch();
  const jobs = useAppSelector(getJobs);
  const positions = useAppSelector(getPositions);
  const [selectedJobId, setSelectedJobId] = useState(job?.id ?? '');
  const [selectedPositionId, setSelectedPositionId] = useState(position?.id ?? '');

  useEffect(() => {
    !jobs && dispatch(fetchJobs());
    !positions && dispatch(fetchPositions());
  }, [dispatch, jobs]);

  const handleFormSubmit = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    setIsLoading(true);

    dispatch(updateEmployeeAction({
      form: new FormData(evt.target),
      employeeId: id,
      errorHandler(error) {
        setIsLoading(false);
        setValidationError(error);
      },
      onSuccess() {
        setIsLoading(false);
        dispatch(redirectToRoute(generatePath(AppRoute.Employee, {employeeId: id})));
        toast.success('Данные успешно сохранены');
      },
    }));
  };

  const handleInputsChange = (evt: BaseSyntheticEvent) =>
    setValidationError((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      if (newState?.errors?.[evt.target.name]) {
        delete newState.errors[evt.target.name]
      }
      return {
        ...newState,
        message: '',
      };
  })

  return (
    <EditModal
      modalButton={
        <Button type="button">
          <EditIcon height={13} /> Редактировать
        </Button>
      }
      modalWindow={
        <EditForm as="form" onSubmit={handleFormSubmit}>
          <TextField
            id="name"
            label="Имя"
            type="text"
            name="name"
            defaultValue={name}
            message={validationError?.errors?.name?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="surname"
            label="Фамилия"
            type="text"
            name="surname"
            defaultValue={surname}
            message={validationError?.errors?.surname?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="patronymic"
            label="Отчество"
            type="text"
            name="patronymic"
            defaultValue={patronymic}
            message={validationError?.errors?.patronymic?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="login"
            label="Логин"
            type="text"
            name="login"
            defaultValue={login}
            message={validationError?.errors?.login?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="startedworkat"
            label="Начало работы"
            type="datetime-local"
            name="started_work_at"
            defaultValue={startedWorkAt}
            message={validationError?.errors?.started_work_at?.[0]}
            onInput={handleInputsChange}
          />

          <TextField
            id="job_id"
            label="Должность"
            name="job_id"
            value={selectedJobId}
            onChange={(evt: BaseSyntheticEvent) => setSelectedJobId(evt.target.value)}
            select={jobs ? [{ value: '', label: 'Не выбрано' }, ...jobs.map(({ id, title }) => ({ value: id, label: title }))] : []}
          />

          <TextField
            id="position_id"
            label="Позиция"
            name="position_id"
            value={selectedPositionId}
            onChange={(evt: BaseSyntheticEvent) => setSelectedPositionId(evt.target.value)}
            select={positions ? [{ value: '', label: 'Не выбрано' }, ...positions.map(({ id, title }) => ({ value: id, label: title }))] : []}
          />

          <SubmitButton
            isLoading={isLoading}
            disabled={isLoading}
            success
            large
          >
            Редактировать
          </SubmitButton>
        </EditForm>
      }
    />
  );
}
