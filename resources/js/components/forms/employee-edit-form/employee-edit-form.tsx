import { BaseSyntheticEvent, useRef, useState } from 'react';
import Button from '../../ui/button/button';
import Buttons from '../../ui/buttons/buttons';
import { Form } from './styled';
import Input from '../../ui/input/input';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getEmployee } from '../../../store/employees-slice/employees-selector';
import { ValidationError } from '../../../types/validation-error';
import { updateEmployeeAction } from '../../../store/employees-slice/employees-api-actions';
import { toast } from 'react-toastify';
import { debounce } from '../../../utils';
import JobSelect from './job-select/job-select';
import PositionSelect from './position-select/position-select';

type EmployeeEditFormProps = {
  closeModalHandler: () => void;
};

function EmployeeEditForm({ closeModalHandler }: EmployeeEditFormProps): JSX.Element {
  const employee = useAppSelector(getEmployee);
  const [validationError, setValidationError] = useState<ValidationError | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const dispatch = useAppDispatch();

  if (!employee) {
    return <></>;
  }

  const handleInputsChange = debounce((evt: BaseSyntheticEvent): void =>
    setValidationError((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      if (newState?.errors?.[evt.target.name]) {
        delete newState.errors[evt.target.name]
      }
      return {
        ...newState,
        message: '',
      };
  }));

  const handleSubmitButtonClick = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    evt.target.setAttribute('disabled', 'disabled')
    formRef.current && dispatch(updateEmployeeAction({
      formData: new FormData(formRef.current),
      employeeId: employee.id,
      errorHandler(error) {
        evt.target.removeAttribute('disabled');
        setValidationError(error);
      },
      successHandler() {
        evt.target.removeAttribute('disabled');
        toast.success('Данные успешно сохранены');
        closeModalHandler();
      },
    }));
  };

  return (
    <Form ref={formRef}>
      <Input
        label="Имя"
        type="text"
        name="name"
        defaultValue={employee.name}
        errorMessage={validationError?.errors?.name?.[0]}
        onInput={handleInputsChange}
      />
      <Input
        label="Фамилия"
        type="text"
        name="surname"
        defaultValue={employee.surname}
        errorMessage={validationError?.errors?.surname?.[0]}
        onInput={handleInputsChange}
      />
      <Input
        label="Отчество"
        type="text"
        name="patronymic"
        defaultValue={employee.patronymic}
        errorMessage={validationError?.errors?.patronymic?.[0]}
        onInput={handleInputsChange}
      />
      <Input
        label="Логин"
        type="text"
        name="login"
        defaultValue={employee.login}
        errorMessage={validationError?.errors?.login?.[0]}
        onInput={handleInputsChange}
      />
      <Input
        label="Начало работы"
        type="datetime-local"
        name="started_work_at"
        defaultValue={employee.startedWorkAt}
        errorMessage={validationError?.errors?.started_work_at?.[0]}
        onInput={handleInputsChange}
      />
      <JobSelect />
      <PositionSelect />

      <Buttons>
        <Button
          type="submit"
          success
          onClick={handleSubmitButtonClick}
        >
          Сохранить
        </Button>
        <Button
          type="reset"
          error
          onClick={() => closeModalHandler()}
        >
          Отмена
        </Button>
      </Buttons>
    </Form>
  );
};

export default EmployeeEditForm;
