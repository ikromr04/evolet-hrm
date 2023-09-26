import { BaseSyntheticEvent, useState } from 'react';
import { EditForm, EditModal, InstitutionField, SubmitButton } from './styled';
import { toast } from 'react-toastify';
import { generatePath, useLocation, useNavigate } from 'react-router-dom';
import { Education } from '../../../../../types/employees';
import { ValidationError } from '../../../../../types/validation-error';
import { useAppDispatch } from '../../../../../hooks';
import { updateEmployeeEducationAction } from '../../../../../store/employees-slice/employees-api-actions';
import { redirectToRoute } from '../../../../../store/middlewares/redirect';
import { AppRoute } from '../../../../../const';
import Button from '../../../../ui/button/button';
import EditIcon from '../../../../icons/edit-icon';
import TextField from '../../../../ui/text-field/text-field';

type EditEducationProps = {
  education: Education
};

export default function EditEducation({ education }: EditEducationProps): JSX.Element {
  const { id, userId, startedAt, graduatedAt, institution, faculty, speciality } = education;
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState<ValidationError | null>(null);
  const dispatch = useAppDispatch();
  const [form, setForm] = useState(education.form);
  const navigate = useNavigate();
  const location = useLocation();

  const handleFormSubmit = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    setIsLoading(true);

    dispatch(updateEmployeeEducationAction({
      form: new FormData(evt.target),
      educationId: id,
      errorHandler(error) {
        setIsLoading(false);
        setValidationError(error);
      },
      onSuccess() {
        setIsLoading(false);
        navigate(location.pathname)
        toast.success('Данные успешно обновлены');
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
            id="started_at"
            label="Год поступления"
            type="datetime-local"
            name="started_at"
            defaultValue={startedAt}
            message={validationError?.errors?.started_at?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="graduated_at"
            label="Год окончания"
            type="datetime-local"
            name="graduated_at"
            defaultValue={graduatedAt}
            message={validationError?.errors?.graduated_at?.[0]}
            onInput={handleInputsChange}
          />
          <InstitutionField
            id="institution"
            label="Учебное заведение"
            type="text"
            name="institution"
            defaultValue={institution}
            message={validationError?.errors?.institution?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="faculty"
            label="Факультет"
            type="text"
            name="faculty"
            defaultValue={faculty}
            message={validationError?.errors?.faculty?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="form"
            label="Форма обучения"
            name="form"
            value={form}
            onChange={(evt: BaseSyntheticEvent) => setForm(evt.target.value)}
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
            defaultValue={speciality}
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
        </EditForm>
      }
    />
  );
}
