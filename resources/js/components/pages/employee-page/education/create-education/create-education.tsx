import { BaseSyntheticEvent, useState } from 'react';
import { CreateForm, CreateModal, InstitutionField, SubmitButton } from './styled';
import { toast } from 'react-toastify';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ValidationError } from '../../../../../types/validation-error';
import { useAppDispatch } from '../../../../../hooks';
import { storeEmployeeEducationAction } from '../../../../../store/employees-slice/employees-api-actions';
import Button from '../../../../ui/button/button';
import PlusIcon from '../../../../icons/plus-icon';
import TextField from '../../../../ui/text-field/text-field';

export default function CreateEducation(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState<ValidationError | null>(null);
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleFormSubmit = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    setIsLoading(true);

    params.employeeId && dispatch(storeEmployeeEducationAction({
      form: new FormData(evt.target),
      employeeId: params.employeeId,
      errorHandler(error) {
        setIsLoading(false);
        setValidationError(error);
      },
      onSuccess() {
        setIsLoading(false);
        navigate(location.pathname);
        toast.success('Данные успешно обновлены');
        evt.target.reset();
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
    <CreateModal
      modalButton={
        <Button type="button">
          <PlusIcon height={13} /> Добавить
        </Button>
      }
      modalWindow={
        <CreateForm as="form" onSubmit={handleFormSubmit}>
          <TextField
            id="started_at"
            label="Год поступления"
            type="datetime-local"
            name="started_at"
            message={validationError?.errors?.started_at?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="graduated_at"
            label="Год окончания"
            type="datetime-local"
            name="graduated_at"
            message={validationError?.errors?.graduated_at?.[0]}
            onInput={handleInputsChange}
          />
          <InstitutionField
            id="institution"
            label="Учебное заведение"
            type="text"
            name="institution"
            message={validationError?.errors?.institution?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="faculty"
            label="Факультет"
            type="text"
            name="faculty"
            message={validationError?.errors?.faculty?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="form"
            label="Форма обучения"
            name="form"
            select={[
              { value: 'Очно', label: 'Очно' },
              { value: 'Заочно', label: 'Заочно' },
            ]}
          />
          <TextField
            id="speciality"
            label="Специальность"
            type="text"
            name="speciality"
            message={validationError?.errors?.speciality?.[0]}
            onInput={handleInputsChange}
          />

          <SubmitButton
            isLoading={isLoading}
            disabled={isLoading}
            success
            large
          >
            Редактировать
          </SubmitButton>
        </CreateForm>
      }
    />
  );
}
