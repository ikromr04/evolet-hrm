import { BaseSyntheticEvent, useRef, useState } from 'react';
import { Form, StyledModal, WideColumn } from './styled';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { Education } from '../../../../../types/employee';
import { ValidationError } from '../../../../../types/validation-error';
import { useAppDispatch } from '../../../../../hooks';
import Button from '../../../../ui/button/button';
import EditIcon from '../../../../icons/edit-icon';
import TextField from '../../../../ui/input/input';
import SelectField from '../../../../ui/select/select';
import {
  updateEmployeeEducationAction
} from '../../../../../store/employees-slice/employees-api-actions';
import Buttons from '../../../../ui/buttons/buttons';
import ModalInner from '../../../../ui/modal-inner/modal-inner';

type EditEducationProps = {
  education: Education;
};

export default function EditEducation({ education }: EditEducationProps): JSX.Element {
  const { id, startedAt, graduatedAt, institution, faculty, speciality } = education;
  const [validationError, setValidationError] = useState<ValidationError | null>(null);
  const [form, setForm] = useState(education.form);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleFormReset = (evt: BaseSyntheticEvent): void => {
    evt.preventDefault();
    Array.from(evt.target.elements).forEach((input: any) => {
      if (input.name !== 'form') {
        input.value = input.defaultValue;
      }
    });
    setForm(education.form);
    setValidationError(null);
    navigate(location.pathname);
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
  });

  const handleSubmitButtonClick = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    evt.target.setAttribute('disabled', 'disabled');
    formRef.current && dispatch(updateEmployeeEducationAction({
      formData: new FormData(formRef.current),
      educationId: id,
      errorHandler(error) {
        evt.target.removeAttribute('disabled');
        setValidationError(error);
      },
      successHandler() {
        toast.success('Данные успешно обновлены');
        evt.target.removeAttribute('disabled');
        navigate(location.pathname)
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
          <Form ref={formRef} onReset={handleFormReset}>
            <TextField
              label="Год поступления"
              type="datetime-local"
              name="started_at"
              defaultValue={startedAt}
              errorMessage={validationError?.errors?.started_at?.[0]}
              onInput={handleInputsChange}
            />
            <TextField
              label="Год окончания"
              type="datetime-local"
              name="graduated_at"
              defaultValue={graduatedAt}
              errorMessage={validationError?.errors?.graduated_at?.[0]}
              onInput={handleInputsChange}
            />
            <WideColumn>
              <TextField
                label="Учебное заведение"
                type="text"
                name="institution"
                defaultValue={institution}
                errorMessage={validationError?.errors?.institution?.[0]}
                onInput={handleInputsChange}
              />
            </WideColumn>
            <WideColumn>
              <TextField
                label="Факультет"
                type="text"
                name="faculty"
                defaultValue={faculty}
                errorMessage={validationError?.errors?.faculty?.[0]}
                onInput={handleInputsChange}
              />
            </WideColumn>
            <SelectField
              label="Форма обучения"
              name="form"
              value={form}
              onChange={(evt: BaseSyntheticEvent) => setForm(evt.target.value)}
              options={[
                { value: 'Очно', label: 'Очно' },
                { value: 'Заочно', label: 'Заочно' },
              ]}
            />
            <TextField
              label="Специальность"
              type="text"
              name="speciality"
              defaultValue={speciality}
              errorMessage={validationError?.errors?.speciality?.[0]}
              onInput={handleInputsChange}
            />

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
