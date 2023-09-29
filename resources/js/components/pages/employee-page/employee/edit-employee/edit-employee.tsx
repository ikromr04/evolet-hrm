import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { Employee } from '../../../../../types/employee';
import { ValidationError } from '../../../../../types/validation-error';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { getJobs } from '../../../../../store/job-slice/job-selector';
import { getPositions } from '../../../../../store/position-slice/position-selector';
import { updateEmployeeAction } from '../../../../../store/employees-slice/employees-api-actions';
import { StyledModal, Form, WideColumn } from './styled';
import Button from '../../../../ui/button/button';
import EditIcon from '../../../../icons/edit-icon';
import TextField from '../../../../ui/text-field/text-field';
import { fetchJobsAction } from '../../../../../store/job-slice/job-api-actions';
import { fetchPositionsAction } from '../../../../../store/position-slice/position-api-actions';
import SelectField from '../../../../ui/select-field/select-field';
import ModalInner from '../../../../ui/modal-inner/modal-inner';
import Buttons from '../../../../ui/buttons/buttons';
import { EMPTY_OPTION_LABEL } from '../../../../../const';

type EditEmployeeProps = {
  employee: Employee;
};

export default function EditEmployee({ employee }: EditEmployeeProps): JSX.Element {
  const { id, name, surname, patronymic, login, startedWorkAt, job, position } = employee;
  const [validationError, setValidationError] = useState<ValidationError | null>(null);
  const dispatch = useAppDispatch();
  const jobs = useAppSelector(getJobs);
  const positions = useAppSelector(getPositions);
  const [selectedJobId, setSelectedJobId] = useState('');
  const [selectedPositionId, setSelectedPositionId] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    !jobs && dispatch(fetchJobsAction());
    !positions && dispatch(fetchPositionsAction());
    setSelectedJobId(job?.id || '');
    setSelectedPositionId(position?.id || '');
  }, [dispatch, jobs, positions, job, position]);

  const handleFormReset = (evt: BaseSyntheticEvent): void => {
    evt.preventDefault();
    Array.from(evt.target.elements).forEach((input: any) => {
      if (input.name !== 'job_id' && input.name !== 'position_id') {
        input.value = input.defaultValue;
      }
    });
    job && setSelectedJobId(job.id);
    position && setSelectedPositionId(position.id);
    setValidationError(null);
    navigate(location.pathname);
  };

  const handleInputsChange = (evt: BaseSyntheticEvent): void =>
    setValidationError((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      if (newState?.errors?.[evt.target.name]) {
        delete newState.errors[evt.target.name]
      }
      return {
        ...newState,
        message: '',
      };
  });

  const handleSubmitButtonClick = (evt: BaseSyntheticEvent): void => {
    evt.preventDefault();
    evt.target.setAttribute('disabled', 'disabled')
    formRef.current && dispatch(updateEmployeeAction({
      formData: new FormData(formRef.current),
      employeeId: id,
      errorHandler(error) {
        evt.target.removeAttribute('disabled');
        setValidationError(error);
      },
      successHandler() {
        evt.target.removeAttribute('disabled');
        toast.success('Данные успешно обновлены');
        navigate(location.pathname);
      },
    }));
  };

  return (
    <StyledModal
      button={
        <Button type="button">
          <EditIcon width={16} height={16} /> Редактировать
        </Button>
      }
      window={
        <ModalInner>
          <Form
            key={employee.id}
            ref={formRef}
            onReset={handleFormReset}
          >
            <TextField
              label="Имя"
              type="text"
              name="name"
              defaultValue={name}
              errorMessage={validationError?.errors?.name?.[0]}
              onInput={handleInputsChange}
            />
            <TextField
              label="Фамилия"
              type="text"
              name="surname"
              defaultValue={surname}
              errorMessage={validationError?.errors?.surname?.[0]}
              onInput={handleInputsChange}
            />
            <TextField
              label="Отчество"
              type="text"
              name="patronymic"
              defaultValue={patronymic}
              errorMessage={validationError?.errors?.patronymic?.[0]}
              onInput={handleInputsChange}
            />
            <TextField
              label="Логин"
              type="text"
              name="login"
              defaultValue={login}
              errorMessage={validationError?.errors?.login?.[0]}
              onInput={handleInputsChange}
            />
            <TextField
              label="Начало работы"
              type="datetime-local"
              name="started_work_at"
              defaultValue={startedWorkAt}
              errorMessage={validationError?.errors?.started_work_at?.[0]}
              onInput={handleInputsChange}
            />

            <SelectField
              label="Позиция"
              name="position_id"
              value={selectedPositionId}
              onChange={(evt: BaseSyntheticEvent) => setSelectedPositionId(evt.target.value)}
              options={positions ? [
                { value: '', label: EMPTY_OPTION_LABEL },
                ...positions.map(({ id, title }) => ({ value: id, label: title })),
              ] : [{ value: '', label: 'Не выбрано' }]}
            />

            <WideColumn>
              <SelectField
                label="Должность"
                name="job_id"
                value={selectedJobId}
                onChange={(evt: BaseSyntheticEvent) => setSelectedJobId(evt.target.value)}
                options={jobs ? [
                  { value: '', label: EMPTY_OPTION_LABEL },
                  ...jobs.map(({ id, title }) => ({ value: id, label: title })),
                ] : [{ value: '', label: 'Не выбрано' }]}
              />
            </WideColumn>

            <WideColumn>
              <Buttons>
                <Button onClick={handleSubmitButtonClick} type="submit" success>Сохранить</Button>
                <Button type="reset" error>Отмена</Button>
              </Buttons>
            </WideColumn>
          </Form>
        </ModalInner>
      }
    />
  );
};
